// @flow strict
import type { TAppState } from "types/state";
import type { TEvent } from "types/event";

import React from "react";

const appReducer = (state: TAppState, event: TEvent): TAppState => {
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

const appInitialState: TAppState = {
  activeScreen: "LOADING",
  intl: null
};

export const useAppReducer = () => {
  return React.useReducer<TAppState, TEvent>(appReducer, appInitialState);
};
