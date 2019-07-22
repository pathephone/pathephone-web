// @flow strict
import * as React from "react";

import { PlayerContext } from "contexts/PlayerContext";
import { EventBoundary } from "view/EventBoundary";

import { usePlayerState } from "./state/usePlayerState";

type TProps = {|
  children: React.Node
|};

export const PlayerProvider = (props: TProps) => {
  const { children } = props;

  const [state, dispatch] = usePlayerState();

  return (
    <EventBoundary handler={dispatch}>
      <PlayerContext.Provider value={state}>{children}</PlayerContext.Provider>
    </EventBoundary>
  );
};
