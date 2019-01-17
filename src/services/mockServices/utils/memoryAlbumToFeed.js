// @flow strict

import type { TFeedAlbum } from "types/uiDataTypes";
import type { TMemoryStorageAlbum } from "./albumsStorage";

import { getUniqueString } from "utils/getUniqueString";

export const memoryAlbumToFeed = ({
  title, cover, tracklist
}: TMemoryStorageAlbum): TFeedAlbum => {
  const uniqueArtists = tracklist
    .reduce((acc, track) => {
      const newArtists = track.artists.filter(
        artist => !acc.includes(artist)
      )
      return [...acc, ...newArtists]
    },[])
  let artistName;
  if (uniqueArtists.length > 1) {
    artistName = 'Various artists'
  } else {
    artistName = uniqueArtists[0] 
  }
  return {
    id: getUniqueString(),
    title,
    artistName,
    coverSrc: URL.createObjectURL(cover)
  }
}