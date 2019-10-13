import * as React from "react";

import { TEvent } from "type/event";

export const DispatchContext = React.createContext<(event: TEvent) => void>(
  event => {
    if (process.env.NODE_ENV === "development") {
      console.log(event);
    }
  }
);
