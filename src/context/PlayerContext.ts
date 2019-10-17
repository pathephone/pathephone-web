import * as React from "react";

import { PlayerState } from "type/state";

const fallbackValue: PlayerState = {
  primaryControls: "OVERVIEW",
  secondaryControls: "PLAYBACK",
  playlist: [],
  playingTrackId: null,
  audioStatus: "PAUSED"
};

export const PlayerContext = React.createContext<PlayerState>(fallbackValue);
