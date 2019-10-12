// @flow strict

import type { TPlayerState } from "type/state";

import * as React from "react";

const fallbackValue: TPlayerState = {
  screen: "OVERVIEW",
  playlist: [],
  playingTrackId: null,
  audioStatus: "PAUSED"
};

export const PlayerContext = React.createContext<TPlayerState>(fallbackValue);
