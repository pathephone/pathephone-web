import * as mm from "music-metadata-browser";

import { getUniqueString } from "util/getUniqueString";
import { TrackCandidate, ArtistCandidate } from "type/model";
import { getRawArtistCandidate } from "util/getRawArtistCandidate";

export const getTrackCandidateFromFile = (
  file: File
): Promise<TrackCandidate> => {
  return mm.parseBlob(file, { skipCovers: true }).then(metadata => {
    const { title, artists: artistsOriginal } = metadata.common;

    let artists: ArtistCandidate[] = [];

    if (artistsOriginal) {
      artists = artistsOriginal.map((name: string) => ({
        name,
        id: getUniqueString()
      }));
    }

    artists.push(getRawArtistCandidate());

    return {
      id: getUniqueString(),
      audio: file,
      title: title || "",
      artists
    };
  });
};
