// @flow strict

import React from 'react';

type TReturnValue<TData> = {| 
  isPending: boolean, 
  data: null | TData, 
  error: null | Error 
|}

export function usePromiseEffect <TData, TParams> (
  getPromise: (params?: TParams) => Promise<TData>,
  params?: TParams
): TReturnValue<TData> {

  if (params !== undefined && !Array.isArray(params)) {
    throw new TypeError('Parameters should be an array.')
  }

  const [ isPending, setIsPending ] = React.useState<boolean>(false)
  const [ data, setData ] = React.useState<null | TData>(null)
  const [ error, setError ] = React.useState<null | Error>(null)

  React.useEffect(() => {
    setData(null)
    setIsPending(true)
    getPromise(params)
      .then(setData)
      .catch(setError)
      .then(() => setIsPending(false))
  }, params)

  return { data, isPending, error }
}
