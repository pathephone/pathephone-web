// @flow strict

export type TMemoryStorageTrack = {|
  title: string;
  artists: string[];
  audio: File;
|}

export type TMemoryStorageAlbum = {|
  id: string;
  title: string;
  cover: File;
  tracklist: TMemoryStorageTrack[];
|}

export const albumsStorage: TMemoryStorageAlbum[] = [];
