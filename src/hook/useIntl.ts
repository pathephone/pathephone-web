import { StrictHookError } from "util/error";

import { useAppState } from "./useAppState";

export const useIntl = () => {
  const { intl } = useAppState();

  return intl;
};

export const useIntlStrict = () => {
  const intl = useIntl();

  if (intl) {
    return intl;
  }

  throw new StrictHookError();
};

export const useIntlDictionary = () => {
  const { dictionary } = useIntlStrict();

  return dictionary;
};
