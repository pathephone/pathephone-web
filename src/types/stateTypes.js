// @flow strict

export type TPlaylistTrack = {|
  id: string;
  title: string;
  artistName: string;
  audioSrc: string;
|}

export type TFeedAlbum = {|
  id: string;
  title: string;
  artistName: string;
  coverSrc: string;
|}

export type TFormArtist = {|
  key: string;
  name: string;  
|}

export type TFormTrack = {|
  key: string;
  title: string;
  artists: TFormArtist[];
  audio: File;
|}

export type TFormAlbum = {|
  title: string;
  cover: File | null;
  tracklist: TFormTrack[];
|}