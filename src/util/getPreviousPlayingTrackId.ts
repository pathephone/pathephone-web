import { PlayerState } from "type/state";

export const getPreviousPlayingTrackId = (
  state: PlayerState
): null | string => {
  const currentTrackIndex = state.playlistTrackIds.findIndex(trackId => {
    return trackId === state.playingTrackId;
  });

  if (currentTrackIndex > -1) {
    const nextTrackId = state.playlistTrackIds[currentTrackIndex - 1];

    if (nextTrackId) {
      return nextTrackId;
    }

    return null;
  }

  throw new TypeError();
};
