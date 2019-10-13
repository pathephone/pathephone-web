import { TAppState } from "type/state";
import { TEvent } from "type/event";

export const initialAppState: TAppState = {
  activeScreen: "LOADING",
  intl: null
};

export const appReducer = (state: TAppState, event: TEvent): TAppState => {
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
