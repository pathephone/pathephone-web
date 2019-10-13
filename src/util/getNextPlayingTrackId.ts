import { TPlayerState } from "type/state";

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
