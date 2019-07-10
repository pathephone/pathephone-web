// @flow strict

export type TFormArtist = {|
  key: string,
  name: string
|};

export type TFormTrack = {|
  key: string,
  title: string,
  artists: TFormArtist[],
  audio: File
|};

export type TFormAlbum = {|
  title: string,
  cover: File | null,
  tracklist: TFormTrack[]
|};
