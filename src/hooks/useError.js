// @flow strict

import { useState } from "hooks/useState";
import { useCallback } from "hooks/useCallback";

export const useError = (initialValue: Error | null) => {

  const [ error, setErrorMessage ] = useState<Error | null>(initialValue)
  
  const setError = useCallback((e: Error | null) => {
    setErrorMessage(e)
  }, [])

  let errorMessage = null;

  if (error instanceof Error) {
    errorMessage = error.message
  }

  return { errorMessage, setError }
}