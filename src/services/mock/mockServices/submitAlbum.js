// @flow strict

import type { TAlbumFormData } from "types/state";

import { asyncTimeout } from "utils/asyncTimeout";
import { SERVICE_MOCK_DELAY } from "data/constants";

import { albumModel } from "./model/albumModel";
import { normalizeFormAlbum } from "./normalize/formAlbum";

export const submitAlbum = async (album: TAlbumFormData): Promise<void> => {
  await asyncTimeout(SERVICE_MOCK_DELAY);
  albumModel.createAlbum(normalizeFormAlbum.toMockStorageAlbum(album));
};
