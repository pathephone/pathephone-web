import { usePlayingTrack } from "hook/usePlayingTrack";

export const usePlayingTrackURL = (): null | string => {
  const playingTrack = usePlayingTrack();

  if (!playingTrack) {
    return null;
  }

  return playingTrack.audioSrc;
};
