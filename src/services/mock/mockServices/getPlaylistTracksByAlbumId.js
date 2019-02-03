// @flow strict

import type { TPlaylistTrack } from 'types/stateTypes' 

import { asyncTimeout } from "utils/asyncTimeout";

import { albumsStorage } from "./mockStorage";
import { mockStorageTrackToPlaylistTrack } from "./normalize/mockStorageTrackToPlaylistTrack";

export const getPlaylistTracksByAlbumId = async (id: string): Promise<TPlaylistTrack[]> => {
  await asyncTimeout(500)
  console.log(id)
  const targetAlbum  = albumsStorage
    .find(album => album.id === id)
  if (!targetAlbum) {
    throw new Error('Unable to find album.')
  }
  return targetAlbum
    .tracklist
    .map(mockStorageTrackToPlaylistTrack)
}