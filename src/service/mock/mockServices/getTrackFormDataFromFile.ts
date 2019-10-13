import { TAlbumFormTrack, TAlbumFormArtist } from "type/state";

import * as mm from "music-metadata-browser";

import { getUniqueString } from "util/getUniqueString";
import { getRawAlbumFormArtistData } from "util/getRawAlbumFormArtistData";

export const getTrackFormDataFromFile = (
  file: File
): Promise<TAlbumFormTrack> => {
  return mm.parseBlob(file, { skipCovers: true }).then(metadata => {
    const { title, artists: artistsOriginal } = metadata.common;

    let artists: TAlbumFormArtist[] = [];

    if (artistsOriginal) {
      artists = artistsOriginal.map((name: string) => ({
        name,
        id: getUniqueString()
      }));
    }

    artists.push(getRawAlbumFormArtistData());

    return {
      id: getUniqueString(),
      audio: file,
      title: title || "",
      artists
    };
  });
};
