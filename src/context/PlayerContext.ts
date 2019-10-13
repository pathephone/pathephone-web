import * as React from "react";

import { TPlayerState } from "type/state";

const fallbackValue: TPlayerState = {
  screen: "OVERVIEW",
  playlist: [],
  playingTrackId: null,
  audioStatus: "PAUSED"
};

export const PlayerContext = React.createContext<TPlayerState>(fallbackValue);
