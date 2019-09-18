// @flow strict

import { asyncTimeout } from "utils/asyncTimeout";
import { SERVICE_MOCK_DELAY } from "data/constants";
import { getIntlByCode } from "data/intl/index";

export const getIntl = async () => {
  await asyncTimeout(SERVICE_MOCK_DELAY);

  return getIntlByCode("en");
};
