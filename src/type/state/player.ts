import { TrackPreview } from "type/model";

export type TAudioStatus = "PAUSED" | "PLAYING" | "PENDING" | "FAILED";

export type TPlayerState = {
  primaryControls: "OVERVIEW" | "SEARCH";
  secondaryControls: "PLAYBACK" | "PLAYLIST";
  playlist: TrackPreview[];
  playingTrackId: null | string;
  audioStatus: TAudioStatus;
  // isShuffle: boolean,
  // isRepeat: boolean
};

export type TPlayingTrackScreen = "DEFAULT" | "PLAYING";

export type TPlaybackControlsScreen =
  | "PLAYING"
  | "PAUSED"
  | "PENDING"
  | "FAILED";
