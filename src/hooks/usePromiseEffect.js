// @flow

import { useToggler } from 'hooks/useToggler';
import { useState } from 'hooks/useState';
import { useEffect } from 'hooks/useEffect';
import { useError } from 'hooks/useError';

type TReturnValue<TData> = {| 
  data: null | TData, 
  isPending: boolean, 
  errorMessage: null | string 
|}

export function usePromiseEffect <TData> (
  getPromise: () => Promise<TData>,
  params?: any[]
) : TReturnValue<TData> {

  const [ isPending, toggleIsPending ] = useToggler()
  const [ data, setData ] = useState<null | TData>(null)
  const { errorMessage, setError } = useError(null)

  useEffect(() => {
    setData(null)
    toggleIsPending()
    getPromise()
      .then(setData)
      .catch(setError)
      .then(toggleIsPending)
  }, params)

  return { data, isPending, errorMessage }
}
