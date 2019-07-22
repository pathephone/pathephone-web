// @flow strict

export type TAudioStatus = "PAUSED" | "PLAYING" | "PENDING";

export type TPlaylistTrack = {|
  id: string,
  title: string,
  artistName: string,
  audioSrc: string
|};

export type TPlayerState = {|
  screen: "OVERVIEW" | "SEARCH",
  playlist: TPlaylistTrack[],
  playingTrackId: null | string,
  audioStatus: TAudioStatus
  // isShuffle: boolean,
  // isRepeat: boolean
|};
