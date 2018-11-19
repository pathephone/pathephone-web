// @flow strict

import * as React from 'react'

import { useToggler } from 'hooks/useToggler';

type TUsePromiseHook = <TData>(asyncFucntion: (...params: mixed[]) => Promise<TData>) =>
  (...params: mixed[]) => [ null | TData, boolean, null | string ]

export const usePromise: TUsePromiseHook = (asyncFunction) => {
  return (...params) => {
    const [ isPending, toggleIsPending ] = useToggler()
    const [ data, setData ] = React.useState(null)
    const [ errorMessage, setErrorMessage ] = React.useState<string | null>(null)

    React.useEffect(() => {
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
