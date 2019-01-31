// @flow strict

export type TServicesTrack = {|
  audioSrc: string;
  title: string;
  artists: string[];  
|}

export type TServicesAlbum = {|
  id: string;
  coverSrc: string;
  title: string;
  tracklist: TServicesTrack[];
|}