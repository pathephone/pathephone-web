// @flow

import React from 'react';

type TReturnValue<TData> = {| 
  data: null | TData, 
  isPending: boolean, 
  errorMessage: null | string 
|}

export function usePromiseEffect <TData> (
  getPromise: () => Promise<TData>,
  params?: any[]
) : TReturnValue<TData> {

  const [ isPending, setIsPending ] = React.useState<boolean>(true)
  const [ data, setData ] = React.useState<null | TData>(null)
  const [ errorMessage, setErrorMessage ] = React.useState<null | string>(null)

  React.useEffect(() => {
    setData(null)
    setIsPending(true)
    getPromise()
      .then(setData)
      .catch((e: Error) => setErrorMessage(e.message))
      .then(() => setIsPending(false))
  }, params)

  return { data, isPending, errorMessage }
}
