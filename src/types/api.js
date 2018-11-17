// @flow strict

export type TMetabinAlbumCover = {
  image: string;
}

export type TMetabinAlbumTrack = {
  audio: string;
  title: string;
  artists: string[];
}

export type TMetabinAlbumData = {
  title: string;
  cover: TMetabinAlbumCover;
  tracklist: TMetabinAlbumTrack[];
}

export type TMetabinAlbumRecord = {
  cid: string;
  data: TMetabinAlbumData;
}