// @flow strict

import * as React from "react";

type IPromiseState<TData> = {|
  pending: boolean,
  resolved: boolean,
  rejected: boolean,
  data: null | TData,
  error: null | Error
|};

const getInitialPromiseState = () => ({
  pending: false,
  resolved: false,
  rejected: false,
  data: null,
  error: null
});

type IReturnValue<TParams, TData> = [
  null | IPromiseState<TData>,
  (params: TParams) => void
];

type TOptions = {|
  throwError?: boolean
|};

export function useAsync<TParams, TData>(
  asyncFunction: (params: TParams) => Promise<TData>,
  options?: TOptions
): IReturnValue<TParams, TData> {
  const { throwError = true } = options || {};

  const promiseRef = React.useRef<null | Promise<TData>>(null);
  const unmountedRef = React.useRef(false);

  const [
    promiseState,
    setPromiseState
  ] = React.useState<null | IPromiseState<TData>>(null);

  if (throwError && promiseState && promiseState.error) {
    throw promiseState.error;
  }

  const trigger = React.useCallback(
    (params: TParams) => {
      const promise = asyncFunction(params);

      promiseRef.current = promise;

      const handleResolve = nextData => {
        if (unmountedRef.current === false && promise === promiseRef.current) {
          setPromiseState({
            ...getInitialPromiseState(),
            resolved: true,
            data: nextData
          });
        }
      };

      const handleReject = (nextError: Error) => {
        if (unmountedRef.current === false && promise === promiseRef.current) {
          if (!throwError) {
            console.error(nextError.message);
          }
          setPromiseState({
            ...getInitialPromiseState(),
            rejected: true,
            error: nextError
          });
        }
      };

      setPromiseState({
        ...getInitialPromiseState(),
        pending: true
      });

      promise.then(handleResolve).catch(handleReject);
    },
    [asyncFunction, throwError]
  );

  React.useEffect(() => {
    setPromiseState(null);
  }, [trigger]);

  React.useEffect(() => {
    return () => {
      unmountedRef.current = true;
    };
  }, []);

  return [promiseState, trigger];
}
