// @flow strict

export type TPlaylistTrack = {|
  id: string;
  title: string;
  artistName: string;
  audioSrc: string;
  isRemoved: boolean;
  isCurrent: boolean;
|}

export type TPlaylistState = TPlaylistTrack[]

export type TFeedAlbum = {|
  id: string;
  title: string;
  artistName: string;
  coverSrc: string;
|}

export type TLocaleName = 'ru' | 'en'