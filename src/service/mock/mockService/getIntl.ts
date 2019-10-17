import { SERVICE_MOCK_DELAY } from "util/constant";
import { getIntlByCodes } from "util/getIntlByCodes";
import { setAsyncTimeout } from "util/setAsyncTimeout";

export const getIntl = async () => {
  await setAsyncTimeout(SERVICE_MOCK_DELAY);

  return getIntlByCodes(["en"]);
};
