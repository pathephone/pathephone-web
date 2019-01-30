// @flow strict

import type { TPlaylistTrack } from "types/uiDataTypes";

import { asyncTimeout } from "utils/asyncTimeout";

import { albumsStorage } from "./utils/albumsStorage";

export const getPlaylistTracksByAlbumId = async (id: string): Promise<TPlaylistTrack[]> => {
  await asyncTimeout(500)
  const targetAlbum = albumsStorage.find(
    album => album.id === id
  )
  if (!targetAlbum) {
    throw new Error('Missing album.')
  }
  return targetAlbum.tracklist.map(momoryStorageAlbumTrackToPlaylist)
}