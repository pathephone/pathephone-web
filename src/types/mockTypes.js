// @flow strict

export type TMockStorageTrack = {|
  title: string,
  artists: string[],
  audioSrc: string
|};

export type TMockStorageAlbum = {|
  id: string,
  title: string,
  coverSrc: string,
  tracklist: TMockStorageTrack[]
|};
