// @flow strict

import type { TServicesAlbum } from "types/servicesTypes";
import type { TFeedAlbum } from "types/stateTypes";

import { getUniqueString } from "utils/getUniqueString";

export const servicesAlbumToFeedAlbum = ({
  title, coverSrc, tracklist
}: TServicesAlbum): TFeedAlbum => {
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
    id: getUniqueString(), title, artistName, coverSrc
  }
}