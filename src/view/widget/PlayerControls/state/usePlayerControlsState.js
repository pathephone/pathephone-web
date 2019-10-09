// @flow strict

import type { TEvent } from "types/event";

import * as React from "react";

type TState = {|
  hasPlaylistMode: boolean
|};

const playerControlsReducer = (state: TState, event: TEvent) => {
  switch (event.type) {
    case "PLAYLIST_POPUP__CLEAR":
    case "PLAYLIST_CONTROLS__CLOSE":
      return {
        hasPlaylistMode: false
      };
    case "PLAYBACK_CONTROLS__OPEN_PLAYLIST":
      return {
        hasPlaylistMode: true
      };
    default:
      return state;
  }
};

const initialPlayerControlsState: TState = {
  hasPlaylistMode: false
};

export const usePlayerControlsState = () => {
  return React.useReducer<TState, TEvent>(
    playerControlsReducer,
    initialPlayerControlsState
  );
};
