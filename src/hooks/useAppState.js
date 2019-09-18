// @flow strict

import { AppContext } from "contexts/AppContext";

import { useContextStrict } from "./useContextStrict";

export const useAppState = () => {
  return useContextStrict(AppContext);
};
