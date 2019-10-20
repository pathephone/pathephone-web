import { Intl } from "type/intl";

import { dictionary } from "intl/en";

export const getIntlMock = (): Intl => ({
  currentCode: "en",
  dictionary: dictionary,
  availableCodes: []
});
