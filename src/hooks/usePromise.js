// @flow

import { useToggler } from 'hooks/useToggler';
import { useState } from 'hooks/useState';
import { useEffect } from 'hooks/useEffect';

export function usePromise <TData> (
  promise: Promise<TData>
) : {| 
  data: null | TData, 
  isPending: boolean, 
  errorMessage: null | string 
|} {
  const [ isPending, toggleIsPending ] = useToggler()
  const [ data, setData ] = useState<null | TData>(null)
  const [ errorMessage, setErrorMessage ] = useState<string | null>(null)

  setData(null)
  toggleIsPending()

  const handleError = (e: Error) => {
    setErrorMessage(e.message)
  }

  promise
    .then(setData)
    .catch(handleError)
    .then(toggleIsPending)

  return { data, isPending, errorMessage }
}
