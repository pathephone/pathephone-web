import { AppState } from "type/state";
import { getIntlMock } from "util/mock/intlMock";

export const getAppStateMock = (): AppState => ({
  intl: getIntlMock(),
  activeScreen: "PLAYER"
});
