// @flow strict

import { usePlayerContext } from "hooks/usePlayerContext";

export const usePlayingTrackURL = () => {
  const { playlist, playingTrackId } = usePlayerContext();

  const playingTrack = playlist.find(track => track.id === playingTrackId);

  if (!playingTrack) {
    throw new TypeError();
  }

  return playingTrack.audioSrc;
};
