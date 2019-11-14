import { PlayerState } from "type/state";

export const createPlayerState = (): PlayerState => ({
  primaryControls: "OVERVIEW",
  secondaryControls: "PLAYBACK",
  wantedTracksAlbumIds: [],
  playlistTrackIds: [],
  playingTrackId: null,
  audioStatus: "PAUSED"
});
