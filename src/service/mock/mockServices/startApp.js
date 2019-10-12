// @flow strict

import { SERVICE_MOCK_DELAY } from "util/constant";
import { setAsyncTimeout } from "util/setAsyncTimeout";

export const startApp = (): Promise<void> =>
  setAsyncTimeout(SERVICE_MOCK_DELAY);
