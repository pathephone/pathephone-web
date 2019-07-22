// @flow strict

import type { TAlbumFormData } from "types/state";

import { asyncTimeout } from "utils/asyncTimeout";
import { SERVICE_MOCK_DELAY } from "data/constants";

import { formAlbumToMockStorageAlbum } from "./normalize/formAlbumToMockStorageAlbum";
import { albumModel } from "./model/albumsModel";

export const submitAlbum = async (album: TAlbumFormData): Promise<void> => {
  await asyncTimeout(SERVICE_MOCK_DELAY);
  albumModel.createAlbum(formAlbumToMockStorageAlbum(album));
};
