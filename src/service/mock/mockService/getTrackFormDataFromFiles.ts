import { AlbumFormTrack } from "type/state";

import { getTrackFormDataFromFile } from "./getTrackFormDataFromFile";

export const getTrackFormDataFromFiles = (
  files: File[]
): Promise<AlbumFormTrack[]> => {
  return Promise.all(files.map(getTrackFormDataFromFile));
};
