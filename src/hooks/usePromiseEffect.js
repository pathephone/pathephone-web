// @flow strict

import React from 'react';

type TReturnValue<TData> = {| 
  isPending: boolean, 
  data: null | TData, 
  error: null | Error
|}

type TOptions = {|
  throwError?: boolean;  
|}

const defaultOptions: TOptions = {
  throwError: true
}

export function usePromiseEffect <TData> (
  getPromise: () => Promise<TData>,
  effectParams?: mixed[],
  options?: TOptions = defaultOptions
): TReturnValue<TData> {

  if (effectParams !== undefined && !Array.isArray(effectParams)) {
    throw new TypeError('Effect parameters should be an array.')
  }

  const [ isPending, setIsPending ] = React.useState<boolean>(false)
  const [ data, setData ] = React.useState<null | TData>(null)
  const [ error, setError ] = React.useState<null | Error>(null)
 
  if (options && options.throwError === true) {
    if (error) {
      throw error
    }
  }

  React.useEffect(() => {
    setData(null)
    setIsPending(true)
    getPromise()
      .then(setData)
      .then(() => setIsPending(false))
      .catch(setError)
  }, effectParams)

  return { data, isPending, error }
}
