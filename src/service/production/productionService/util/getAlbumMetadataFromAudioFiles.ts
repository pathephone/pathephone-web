import * as mm from "music-metadata-browser";

import { getUniqueString } from "util/getUniqueString";
import { TrackCandidate, ArtistCandidate } from "type/model";

/*

TODO: extract picture from audio metadata

type TPicture = {
  format: string;
  data: Buffer;
  description?: string;
  type?: string;
}

*/

type TAudioMetadata = {
  tracklist: TrackCandidate[];
  title: string;
};

export const getAlbumMetadataFromAudioFiles = async (
  files: File[]
): Promise<TAudioMetadata> => {
  const audiosMetadata = await Promise.all(
    files.map(file => mm.parseBlob(file))
  );

  const titles = audiosMetadata.map(({ common }) => common.album);

  const tracklist: TrackCandidate[] = audiosMetadata.map(
    ({ common }, index) => {
      let artists: ArtistCandidate[] = [];

      if (common.artists) {
        artists = common.artists.map((name: string) => ({
          name,
          id: getUniqueString()
        }));
      }

      return {
        id: getUniqueString(),
        title: common.title || "",
        artists,
        audio: files[index]
      };
    }
  );

  return {
    title: titles.find(title => !!title) || "",
    tracklist
  };
};
