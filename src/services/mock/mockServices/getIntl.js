// @flow strict

import { asyncTimeout } from "utils/asyncTimeout";
import { SERVICE_MOCK_DELAY } from "data/constants";
import { getIntlByCodes } from "data/intl";

export const getIntl = async () => {
  await asyncTimeout(SERVICE_MOCK_DELAY);

  return getIntlByCodes(["en"]);
};
