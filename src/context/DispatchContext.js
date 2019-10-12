// @flow strict

import type { TEvent } from "type/event";

import * as React from "react";

export const DispatchContext = React.createContext<(event: TEvent) => void>(
  event => {
    if (process.env.NODE_ENV === "development") {
      console.log(event);
    }
  }
);
