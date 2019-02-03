// @flow strict

import { asyncTimeout } from "utils/asyncTimeout";

export const startApp = (): Promise<void> => (
  asyncTimeout(500)
)