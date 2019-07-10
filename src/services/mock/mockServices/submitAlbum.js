// @flow strict

import type { TFormAlbum } from "types/state";

import { asyncTimeout } from "utils/asyncTimeout";
import { SERVICE_MOCK_DELAY } from "data/constants";

import { formAlbumToMockStorageAlbum } from "./normalize/formAlbumToMockStorageAlbum";
import { albumModel } from "./model/albumsModel";

export const submitAlbum = async (album: TFormAlbum): Promise<void> => {
  await asyncTimeout(SERVICE_MOCK_DELAY);
  albumModel.createAlbum(formAlbumToMockStorageAlbum(album));
};
