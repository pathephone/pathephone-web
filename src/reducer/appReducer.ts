import { AppState } from "type/state";
import { TEvent } from "type/event";

export const initialAppState: AppState = {
  activeScreen: "LOADING",
  intl: null
};

export const appReducer = (state: AppState, event: TEvent): AppState => {
  switch (event.type) {
    case "GET_INTL_SERVICE__RESOLVED":
      return {
        intl: event.payload,
        activeScreen: "PLAYER"
      };
    default:
      return state;
  }
};
