// @flow strict

import type { TFormAlbum } from "types/stateTypes";

import { asyncTimeout } from "utils/asyncTimeout";

import { albumsStorage } from "./mockStorage";

import { formAlbumToMockStorageAlbum } from "./normalize/formAlbumToMockStorageAlbum";

export const submitAlbum = async (album: TFormAlbum): Promise<void> => {
  await asyncTimeout(500)
  albumsStorage.push(formAlbumToMockStorageAlbum(album))
}