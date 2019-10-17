import { AlbumFormData } from "type/state";

import { SERVICE_MOCK_DELAY } from "util/constant";
import { setAsyncTimeout } from "util/setAsyncTimeout";

import { albumModel } from "./model/albumModel";
import { normalizeFormAlbum } from "./normalize/formAlbum";

export const submitAlbum = async (album: AlbumFormData): Promise<void> => {
  await setAsyncTimeout(SERVICE_MOCK_DELAY);
  albumModel.createAlbum(normalizeFormAlbum.toMockStorageAlbum(album));
};
