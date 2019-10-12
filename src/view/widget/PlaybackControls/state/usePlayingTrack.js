// @flow strict

import { usePlayerContext } from "hook/usePlayerContext";

export const usePlayingTrack = () => {
  const { playlist, playingTrackId } = usePlayerContext();

  const playingTrack = playlist.find(({ id }) => id === playingTrackId);

  if (!playingTrack) {
    throw new TypeError();
  }

  return playingTrack;
};
