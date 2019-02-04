// @flow

import React from "react";

type TReturnValue<TData> = {|
  data: null | TData,
  isPending: boolean,
  errorMessage: null | string
|};

export function usePromise<TData>(
  promise: Promise<TData>
): TReturnValue<TData> {
  const [isPending, setIsPending] = React.useState<boolean>(true);
  const [data, setData] = React.useState<null | TData>(null);
  const [errorMessage, setErrorMessage] = React.useState<null | string>(null);

  promise
    .then(setData)
    .catch((e: Error) => setErrorMessage(e.message))
    .then(() => setIsPending(false));

  return { data, isPending, errorMessage };
}
