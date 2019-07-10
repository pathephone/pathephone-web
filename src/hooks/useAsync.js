// @flow strict

import * as React from "react";

type IPromiseState<TValue> = {|
  pending: boolean,
  resolved: boolean,
  rejected: boolean,
  value: null | TValue,
  error: null | Error
|};

const getRawPromiseState = () => ({
  pending: false,
  resolved: false,
  rejected: false,
  value: null,
  error: null
});

type IReturnValue<TParams, TValue> = [
  null | IPromiseState<TValue>,
  (params: TParams) => void
];

type TOptions = {
  errorsToKeep?: Class<Error>[]
};

export class InvalidExceptionError extends TypeError {
  constructor() {
    super("useAsync accepts only Error-based exceptions.");
  }
}

export function useAsync<TParams, TValue>(
  asyncFunction: (params: TParams) => Promise<TValue>,
  options?: TOptions = {}
): IReturnValue<TParams, TValue> {
  const { errorsToKeep = [] } = options;

  const promiseRef = React.useRef<null | Promise<TValue>>(null);
  const unmountedRef = React.useRef(false);
  const callbackRef = React.useRef<null | ((params: TParams) => void)>(null);

  const [
    promiseState,
    setPromiseState
  ] = React.useState<null | IPromiseState<TValue>>(null);

  if (promiseState && promiseState.error !== null) {
    const { error } = promiseState;

    if (!(error instanceof Error)) {
      throw new InvalidExceptionError();
    }

    const keep = errorsToKeep.some(
      ErrorConstructor => promiseState.error instanceof ErrorConstructor
    );

    if (!keep) {
      throw promiseState.error;
    }
  }

  const callback = React.useCallback(
    (params: TParams) => {
      const promise = asyncFunction(params);

      promiseRef.current = promise;

      const isActual = () =>
        unmountedRef.current === false &&
        promise === promiseRef.current &&
        callback === callbackRef.current;

      const handleResolve = nextValue => {
        if (isActual()) {
          if (nextValue instanceof Error) {
            throw nextValue;
          } else {
            setPromiseState({
              ...getRawPromiseState(),
              resolved: true,
              value: nextValue
            });
          }
        }
      };

      const handleReject = (nextError: Error) => {
        if (isActual()) {
          setPromiseState({
            ...getRawPromiseState(),
            rejected: true,
            error: nextError
          });
        }
      };

      setPromiseState({
        ...getRawPromiseState(),
        pending: true
      });

      promise.then(handleResolve).catch(handleReject);
    },
    [asyncFunction]
  );

  React.useEffect(() => {
    setPromiseState(null);
    promiseRef.current = null;
    callbackRef.current = callback;
  }, [callback]);

  React.useEffect(() => {
    return () => {
      unmountedRef.current = true;
    };
  }, []);

  return [promiseState, callback];
}
