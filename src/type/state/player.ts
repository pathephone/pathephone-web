export type TAudioStatus = "PAUSED" | "PLAYING" | "PENDING" | "FAILED";

export type TPlaylistTrack = {
  id: string;
  title: string;
  artistName: string;
  audioSrc: string;
};

export type TPlayerState = {
  primaryControls: "OVERVIEW" | "SEARCH";
  secondaryControls: "PLAYBACK" | "PLAYLIST";
  playlist: TPlaylistTrack[];
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
