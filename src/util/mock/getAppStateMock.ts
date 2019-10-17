import { AppState } from "type/state";

import { getIntlMock } from "util/mock/getIntlMock";

export const getAppStateMock = (): AppState => ({
  intl: getIntlMock(),
  activeScreen: "PLAYER"
});
