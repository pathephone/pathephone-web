// @flow strict

import type { TPlaylistTrack } from 'types/state';
import type { TMetabinAlbumTrack } from 'types/api';

import { getUniqueString } from "utils/getUniqueString";

const toPlaylistTrack = (albumTrack: TMetabinAlbumTrack): TPlaylistTrack => {
  return {
    id: getUniqueString(),
    title: albumTrack.title,
    artistName: albumTrack.artists.join(', '),
    audioSrc: albumTrack.audio,
    isPlaying: false,
    isRemoved: false
  }
}

export const toPlaylistTracks = (tracklist: TMetabinAlbumTrack[]): TPlaylistTrack[] => {
  return tracklist.map(toPlaylistTrack)
}