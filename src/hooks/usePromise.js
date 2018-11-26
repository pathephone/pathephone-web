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

export function usePromise <TData> (
  promise: Promise<TData>
) : TReturnValue<TData> {

  const [ isPending, toggleIsPending ] = useToggler(true)
  const [ data, setData ] = useState<null | TData>(null)
  const { errorMessage, setError } = useError(null)

  promise
    .then(setData)
    .catch(setError)
    .then(toggleIsPending)

  return { data, isPending, errorMessage }
}
