import * as React from "react";

import { EventBoundary } from "util/react/EventBoundary";
import { AppContext } from "context/AppContext";
import { appReducer, initialAppState } from "reducer/appReducer";

type TProps = {
  children: React.ReactNode;
};

export const AppProvider = (props: TProps) => {
  const { children } = props;

  const [state, dispatch] = React.useReducer(appReducer, initialAppState);

  return (
    <EventBoundary handler={dispatch}>
      <AppContext.Provider value={state}>{children}</AppContext.Provider>
    </EventBoundary>
  );
};
