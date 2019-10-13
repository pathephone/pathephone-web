import * as React from "react";

import { PlayerContext } from "context/PlayerContext";
import { EventBoundary } from "util/react/EventBoundary";

import { playerReducer, initialPlayerState } from "reducer/playerReducer";

type TProps = {
  children: React.ReactNode;
};

export const PlayerProvider = (props: TProps) => {
  const { children } = props;

  const [state, dispatch] = React.useReducer(playerReducer, initialPlayerState);

  return (
    <EventBoundary handler={dispatch}>
      <PlayerContext.Provider value={state}>{children}</PlayerContext.Provider>
    </EventBoundary>
  );
};
