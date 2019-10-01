// @flow strict

import * as React from "react";

import { EventBoundary } from "view/EventBoundary";
import { LatestAlbumsPageContext } from "contexts/LatestAlbumsPageContext";

import { latestAlbumsPageReducer } from "./state/latestAlbumsPageReducer";
import { initialLatestAlbumsState } from "./state/initialLatestAlbumsPageState";

type TProps = {|
  children: React.Node
|};

export const LatestAlbumsPageProvider = ({ children }: TProps) => {
  const [state, dispatch] = React.useReducer(
    latestAlbumsPageReducer,
    initialLatestAlbumsState
  );

  return (
    <EventBoundary handler={dispatch}>
      <LatestAlbumsPageContext.Provider value={state}>
        {children}
      </LatestAlbumsPageContext.Provider>
    </EventBoundary>
  );
};
