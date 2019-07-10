// @flow strict

import { useContextStrict } from "./useContextStrict";
import { ServicesContext } from "contexts/ServicesContext";

export const useServices = () => {
  return useContextStrict(ServicesContext);
};
