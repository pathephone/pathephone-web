import * as React from "react";

import { TPlayerState } from "type/state";

const fallbackValue: TPlayerState = {
  primaryControls: "OVERVIEW",
  secondaryControls: "PLAYBACK",
  playlist: [],
  playingTrackId: null,
  audioStatus: "PAUSED"
};

export const PlayerContext = React.createContext<TPlayerState>(fallbackValue);
