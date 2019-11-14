import * as React from "react";

import { AppEvent } from "type/event";

export const DispatchContext = React.createContext<(event: AppEvent) => void>(
  event => {
    if (process.env.NODE_ENV === "development") {
      console.log(event);
    }
  }
);
