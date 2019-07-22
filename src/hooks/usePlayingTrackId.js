// @flow strict

import { usePlayerContext } from "./usePlayerContext";

export const usePlayingTrackId = () => {
  const { playingTrackId } = usePlayerContext();

  return playingTrackId;
};
