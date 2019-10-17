import { MissingAudioFilesError } from "util/error";

import { getAlbumMetadataFromAudioFiles } from "./util/getAlbumMetadataFromAudioFiles";
import { getCustomFileFromFile } from "./util/getCustomFileFromFile";
import { filterAudioFiles } from "./util/filterAudioFiles";
import { filterImageFiles } from "./util/filterImageFiles";
import { AlbumCandidate } from "type/model";

const coverRegExp = /(front|cover)/g;

/*

TODO: extract picture from audio metadata

type TPicture = {
  format: string;
  data: Buffer;
  description?: string;
  type?: string;
}

*/

export const getAlbumCandidateFromFiles = async (
  originalFiles: File[]
): Promise<AlbumCandidate> => {
  const files = await Promise.all(originalFiles.map(getCustomFileFromFile));

  const audioFiles = filterAudioFiles(files);

  const imageFiles = filterImageFiles(files);

  if (audioFiles.length > 0) {
    const { tracklist, title } = await getAlbumMetadataFromAudioFiles(
      audioFiles.map(customFile => customFile.file)
    );

    const coverFile = imageFiles.find(customFile =>
      coverRegExp.test(customFile.file.name)
    );

    const fallbackCover = imageFiles[0] ? imageFiles[0].file : null;

    const cover = coverFile ? coverFile.file : fallbackCover;

    return {
      tracklist,
      title,
      cover
    };
  }

  throw new MissingAudioFilesError();
};
