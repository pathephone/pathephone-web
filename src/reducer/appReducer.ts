import { AppState } from "type/state";
import { TEvent } from "type/event";

export const initialAppState: AppState = {
  activeScreen: "LOADING",
  intl: null
};

export const appReducer = (state: AppState, event: TEvent): AppState => {
  switch (event.type) {
    case "GET_INTL":
      if (event.status === "RESOLVED") {
        return {
          intl: event.payload,
          activeScreen: "PLAYER"
        };
      }
      return state;
    default:
      return state;
  }
};
