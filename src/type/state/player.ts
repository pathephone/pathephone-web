export type TAudioStatus = "PAUSED" | "PLAYING" | "PENDING" | "FAILED";

export type TPlaylistTrack = {
  id: string;
  title: string;
  artistName: string;
  audioSrc: string;
};

export type TPlayerState = {
  screen: "OVERVIEW" | "SEARCH";
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
