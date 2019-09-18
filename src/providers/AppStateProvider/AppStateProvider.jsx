// @flow strict

import * as React from "react";

import { EventBoundary } from "view/EventBoundary";
import { AppContext } from "contexts/AppContext";

import { useAppReducer } from "./state/useAppReducer";

type TProps = {
  children: React.Node
};

export const AppStateProvider = (props: TProps) => {
  const { children } = props;

  const [state, dispatch] = useAppReducer();

  return (
    <EventBoundary handler={dispatch}>
      <AppContext.Provider value={state}>{children}</AppContext.Provider>
    </EventBoundary>
  );
};
