// @flow strict

import type { TFormAlbum } from "types/stateTypes";

import { asyncTimeout } from "utils/asyncTimeout";
import { formAlumToMemoryStorage } from "utils/normalize/formAlbumToMemoryStorage";

import { albumsStorage } from "./utils/albumsStorage";

export const submitAlbum = async (album: TFormAlbum): Promise<void> => {
  await asyncTimeout(500)
  albumsStorage.push(formAlumToMemoryStorage(album))
}