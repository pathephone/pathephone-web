import { ViewState } from "type/state/viewState";

export const createViewState = (): ViewState => ({
  activeScreen: "LOADING",
  currentIntlCode: null
});
