import * as React from "react";

import { EventBoundary } from "util/react/EventBoundary";
import { AppContext } from "context/AppContext";
import { appStateReducer } from "reducer/appStateReducer";
import { createAppState } from "util/createAppState";

type TProps = {
  children: React.ReactNode;
};

export const AppStateProvider = (props: TProps) => {
  const { children } = props;

  const [state, dispatch] = React.useReducer(
    appStateReducer,
    null,
    createAppState
  );

  return (
    <EventBoundary handler={dispatch}>
      <AppContext.Provider value={state}>{children}</AppContext.Provider>
    </EventBoundary>
  );
};
