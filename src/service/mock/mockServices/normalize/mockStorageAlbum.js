// @flow strict

import type { TMockStorageAlbum } from "type/mockTypes";
import type { TFeedAlbum } from "type/state";

const toFeedAlbum = ({
  title,
  coverSrc,
  tracklist,
  id
}: TMockStorageAlbum): TFeedAlbum => {
  const uniqueArtists = tracklist.reduce((acc, track) => {
    const newArtists = track.artists.filter(artist => !acc.includes(artist));
    return [...acc, ...newArtists];
  }, []);
  let artistName;
  if (uniqueArtists.length > 1) {
    artistName = "Various artists";
  } else {
    artistName = uniqueArtists[0];
  }
  return {
    id,
    title,
    artistName,
    coverSrc,
    saved: true
  };
};

export const normalizeMockStorageAlbum = { toFeedAlbum };
