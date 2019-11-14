import { AppEvent } from "type/event";
import { ViewState } from "type/state/viewState";

export const viewStateReducer = (
  state: ViewState,
  event: AppEvent
): ViewState => {
  switch (event.type) {
    case "GET_INTL":
      if (event.status === "RESOLVED") {
        return {
          ...state,
          activeScreen: "PLAYER",
          currentIntlCode: event.payload.currentCode
        };
      }

      return state;

    default:
      return state;
  }
};
