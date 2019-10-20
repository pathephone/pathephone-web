import { getIntlByCodes } from "util/getIntlByCodes";

export const getIntl = async () => {
  return getIntlByCodes([...navigator.languages]);
};
