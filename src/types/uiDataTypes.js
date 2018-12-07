// @flow strict

import { defaultLocaleStrings } from "data/defaultLocaleStrings";

export type TLocaleStrings = typeof defaultLocaleStrings;

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