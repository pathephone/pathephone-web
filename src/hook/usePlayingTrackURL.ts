import { usePlayerContext } from "hook/usePlayerContext";

export const usePlayingTrackURL = () => {
  const { playlist, playingTrackId } = usePlayerContext();

  const playingTrack = playlist.find(track => track.id === playingTrackId);

  if (!playingTrack) {
    return null;
  }

  return playingTrack.audioSrc;
};
