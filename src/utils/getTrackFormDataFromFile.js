// @flow strict

import type { TFormTrack } from "types/state";

import * as mm from "music-metadata-browser";

import { getRawAlbumFormArtistData } from "data/models";
import { getUniqueString } from "utils/getUniqueString";

export const getTrackFormDataFromFile = (file: File): Promise<TFormTrack> => {
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
