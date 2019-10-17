import * as mm from "music-metadata-browser";

import { AlbumFormTrack, AlbumFormArtist } from "type/state";

import { getUniqueString } from "util/getUniqueString";

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
  tracklist: AlbumFormTrack[];
  title: string;
};

export const getAlbumMetadataFromAudioFiles = async (
  files: File[]
): Promise<TAudioMetadata> => {
  const audiosMetadata = await Promise.all(
    files.map(file => mm.parseBlob(file))
  );

  const titles = audiosMetadata.map(({ common }) => common.album);

  const tracklist: AlbumFormTrack[] = audiosMetadata.map(
    ({ common }, index) => {
      let artists: AlbumFormArtist[] = [];

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
