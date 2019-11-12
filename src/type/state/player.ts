import { TrackPreview } from "type/model";

export type AudioStatus = "PAUSED" | "PLAYING" | "PENDING" | "FAILED";

export type PlayerState = {
  primaryControls: "OVERVIEW" | "SEARCH";
  secondaryControls: "PLAYBACK" | "PLAYLIST";
  wantedTracksAlbumIds: string[];
  playlist: TrackPreview[];
  playingTrackId: null | string;
  audioStatus: AudioStatus;
  // isShuffle: boolean,
  // isRepeat: boolean
};

export type PlayingTrackScreen = "DEFAULT" | "PLAYING";

export type PlaybackControlsScreen =
  | "PLAYING"
  | "PAUSED"
  | "PENDING"
  | "FAILED";
