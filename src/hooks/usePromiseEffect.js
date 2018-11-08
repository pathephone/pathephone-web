// @flow strict

import React from "react";

type TReturnValue<TData> = {|
  isPending: boolean,
  isSucceeded: boolean,
  data: null | TData,
  error: null | Error
|};

type TOptions = {|
  throwError?: boolean
|};

const defaultOptions: TOptions = {
  throwError: true
};

export function usePromiseEffect<TData>(
  getPromise: () => Promise<TData>,
  effectParams?: mixed[],
  options?: TOptions = defaultOptions
): TReturnValue<TData> {
  if (effectParams !== undefined && !Array.isArray(effectParams)) {
    throw new TypeError("Effect parameters should be an array.");
  }

  const [isSucceeded, setIsSucceeded] = React.useState<boolean>(false);
  const [isPending, setIsPending] = React.useState<boolean>(false);
  const [data, setData] = React.useState<null | TData>(null);
  const [error, setError] = React.useState<null | Error>(null);

  if (options.throwError === true && error && !isPending) {
    throw error;
  }

  React.useEffect(() => {
    setIsSucceeded(false);
    setData(null);
    setIsPending(true);
    getPromise()
      .then(setData)
      .then(() => {
        setIsSucceeded(true);
      })
      .catch(setError)
      .then(() => {
        setIsPending(false);
      });
  }, effectParams);

  return { data, error, isPending, isSucceeded };
}
