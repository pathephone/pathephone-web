// @flow strict

import type { TAppState } from "type/state";

import { getIntlMock } from "util/mock/getIntlMock";

export const getAppStateMock = (): TAppState => ({
  intl: getIntlMock(),
  activeScreen: "PLAYER"
});
