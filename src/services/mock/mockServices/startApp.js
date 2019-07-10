// @flow strict

import { asyncTimeout } from "utils/asyncTimeout";
import { SERVICE_MOCK_DELAY } from "data/constants";

export const startApp = (): Promise<void> => asyncTimeout(SERVICE_MOCK_DELAY);
