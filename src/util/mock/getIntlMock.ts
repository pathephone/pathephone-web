import { TIntl } from "type/state";

import { dictionary } from "intl/en";

export const getIntlMock = (): TIntl => ({
  currentCode: "en",
  dictionary: dictionary,
  availableCodes: []
});
