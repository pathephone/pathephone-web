// @flow strict

import { useContextStrict } from "hooks/useContextStrict";
import { RouterContext } from "contexts/RouterContext";

export const useRouter = () => {
  return useContextStrict(RouterContext);
};
