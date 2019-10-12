// @flow strict

import type { TAlbumFormTrack } from "type/state";

import * as mm from "music-metadata-browser";

import { getUniqueString } from "util/getUniqueString";
import { getRawAlbumFormArtistData } from "util/getRawAlbumFormArtistData";

export const getTrackFormDataFromFile = (
  file: File
): Promise<TAlbumFormTrack> => {
  return mm.parseBlob(file, { skipCovers: true }).then(metadata => {
    const { title, artists: artistsOriginal } = metadata.common;

    const artists = artistsOriginal.map((name: string) => ({
      name,
      key: getUniqueString()
    }));

    artists.push(getRawAlbumFormArtistData());

    return {
      key: getUniqueString(),
      audio: file,
      title,
      artists
    };
  });
};
