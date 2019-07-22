// @flow strict

import * as React from "react";

import { EventBoundary } from "view/EventBoundary";
import { ShareAlbumPageContext } from "contexts/ShareAlbumPageContext";

import { useShareAlbumPageReducer } from "./state/useShareAlbumPageReducer";

type TProps = {
  children: React.Node
};

export const ShareAlbumPageStateProvider = (props: TProps) => {
  const { children } = props;

  const [state, dispatch] = useShareAlbumPageReducer();

  return (
    <EventBoundary handler={dispatch}>
      <ShareAlbumPageContext.Provider value={state}>
        {children}
      </ShareAlbumPageContext.Provider>
    </EventBoundary>
  );
};
