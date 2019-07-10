// @flow strict

export type TPlaylistTrack = {|
  id: string,
  title: string,
  artistName: string,
  audioSrc: string
|};

export type TPlayer = {|
  playlist: TPlaylistTrack[],
  playingTrackId: null | string,
  isPaused: boolean,
  isShuffle: boolean,
  isRepeat: boolean,
  toggleIsPaused(): void,
  toggleIsShuffle(): void,
  toggleIsRepeat(): void,
  setPlayingTrackId(id: null | string): void,
  addPlaylistTracks(newTracks: TPlaylistTrack[]): void,
  removePlaylistTrack(id: string): void,
  clearPlaylist(): void
|};
