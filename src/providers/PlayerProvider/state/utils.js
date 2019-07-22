// @flow strict

import type { TPlayerState } from "types/state";

export const getNextPlayingTrackId = (state: TPlayerState): null | string => {
  const currentTrackIndex = state.playlist.findIndex(track => {
    return track.id === state.playingTrackId;
  });

  if (currentTrackIndex > -1) {
    const nextTrack = state.playlist[currentTrackIndex + 1];

    if (nextTrack) {
      return nextTrack.id;
    }

    return null;
  }

  throw new TypeError();
};

export const getPreviousPlayingTrackId = (
  state: TPlayerState
): null | string => {
  const currentTrackIndex = state.playlist.findIndex(track => {
    return track.id === state.playingTrackId;
  });

  if (currentTrackIndex > -1) {
    const nextTrack = state.playlist[currentTrackIndex - 1];

    if (nextTrack) {
      return nextTrack.id;
    }

    return null;
  }

  throw new TypeError();
};
