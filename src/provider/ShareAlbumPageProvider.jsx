// @flow strict

import * as React from "react";

import { EventBoundary } from "util/react/EventBoundary";
import { ShareAlbumPageContext } from "context/ShareAlbumPageContext";
import {
  shareAlbumPageReducer,
  initialShareAlbumPageState
} from "reducer/shareAlbumPageReducer";

type TProps = {
  children: React.Node
};

export const ShareAlbumPageProvider = (props: TProps) => {
  const { children } = props;

  const [state, dispatch] = React.useReducer(
    shareAlbumPageReducer,
    initialShareAlbumPageState
  );

  return (
    <EventBoundary handler={dispatch}>
      <ShareAlbumPageContext.Provider value={state}>
        {children}
      </ShareAlbumPageContext.Provider>
    </EventBoundary>
  );
};
