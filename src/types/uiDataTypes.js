// @flow strict

export type TPlaylistTrack = {|
  id: string;
  title: string;
  artistName: string;
  audioSrc: string;
  isRemoved: boolean;
  isPlaying: boolean;
|}

export type TFeedAlbum = {|
  id: string;
  title: string;
  artistName: string;
  coverSrc: string;
|}

export type TFormTrack = {
  title: string;
  artists: string[];
  audio: File;
}

export type TFormAlbum = {|
  title: string;
  cover: File;
  tracklist: TFormTrack[];
|}