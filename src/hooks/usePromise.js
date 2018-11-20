// @flow

import { useToggler } from 'hooks/useToggler';
import { useState } from 'hooks/useState';
import { useEffect } from 'hooks/useEffect';

export function usePromise <TData> (
  asyncFunction: (...params: any[]) => Promise<TData>
) : (
  ...params: any[]
) => [ null | TData, boolean, null | string ] {
  return (...params) => {

    const [ isPending, toggleIsPending ] = useToggler()
    const [ data, setData ] = useState<null | any>(null)
    const [ errorMessage, setErrorMessage ] = useState<string | null>(null)

    useEffect(() => {
      setData(null)
      toggleIsPending()

      const handleError = (e: Error) => {
        setErrorMessage(e.message)
      }

      asyncFunction(...params)
        .then(setData)
        .catch(handleError)
        .then(toggleIsPending)

    },[...params])

    return [ data, isPending, errorMessage ]
  }
}
