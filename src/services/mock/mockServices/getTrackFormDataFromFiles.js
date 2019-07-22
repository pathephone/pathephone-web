// @flow strict

import type { TAlbumFormTrack } from "types/state";

import { getTrackFormDataFromFile } from "./getTrackFormDataFromFile";

export const getTrackFormDataFromFiles = (
  files: File[]
): Promise<TAlbumFormTrack[]> => {
  return Promise.all(files.map(getTrackFormDataFromFile));
};
