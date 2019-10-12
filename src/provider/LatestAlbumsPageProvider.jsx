// @flow strict

import * as React from "react";

import { EventBoundary } from "util/react/EventBoundary";
import { LatestAlbumsPageContext } from "context/LatestAlbumsPageContext";
import {
  latestAlbumsPageReducer,
  initialLatestAlbumsState
} from "reducer/latestAlbumsPageReducer";

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
