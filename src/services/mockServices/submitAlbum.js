// @flow strict

import type { TFormAlbum } from "types/uiDataTypes";

import { asyncTimeout } from "utils/asyncTimeout";

import { albumsStorage } from "./utils/albumsStorage";
import { formAlumToMemoryStorage } from "./utils/formAlbumToMemoryStorage";

export const submitAlbum = async (album: TFormAlbum): Promise<void> => {
  await asyncTimeout(500)
  albumsStorage.push(formAlumToMemoryStorage(album))
}