// @flow strict

import { useContext } from "hooks/useContext";
import { GlobalContext } from "contexts/GlobalContext";

export const useGlobalContext = () => {
  const contextValue = useContext(GlobalContext);
  if (contextValue === null) {
    throw new Error('Missing global context provider.')
  }
  return contextValue
}