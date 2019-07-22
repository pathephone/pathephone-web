// @flow strict

import type { TAppState } from "types/state";

import { getIntlMock } from "utils/mock/getIntlMock";

export const getAppStateMock = (): TAppState => ({
  intl: getIntlMock(),
  activeScreen: "PLAYER"
});
