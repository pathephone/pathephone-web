// @flow strict

import type { TFeedAlbum } from 'types/state';
import type { TMetabinAlbumRecord } from 'types/api';

import { getUniqueString } from "utils/getUniqueString";

const toPlaylistTrack = (metabinAlbum: TMetabinAlbumRecord): TFeedAlbum => {
  return {
    id: getUniqueString(),
    title: metabinAlbum.data.title,
    artistName: metabinAlbum
      .data
      .tracklist
      .reduce((acc, track) => {
        track.artists.forEach((artistName) => {
          if (!acc.includes(artistName)) {
           acc.push(artistName) 
          }
        })
        return acc
      }, [])
      .join(', '),
    coverSrc: metabinAlbum.data.cover.image
  }
}

export const toFeedAlbums = (metabinAlbums: TMetabinAlbumRecord[]): TFeedAlbum[] => {
  return metabinAlbums.map(toPlaylistTrack)
}