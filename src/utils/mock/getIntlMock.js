// @flow strict

import type { TIntl } from "types/state";

import { dictionary } from "data/intl/en";

export const getIntlMock = (): TIntl => ({
  currentCode: "en",
  dictionary: dictionary,
  availableCodes: []
});
