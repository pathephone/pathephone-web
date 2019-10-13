import { AppContext } from "context/AppContext";

import { useContextStrict } from "./useContextStrict";

export const useAppState = () => {
  return useContextStrict(AppContext);
};
