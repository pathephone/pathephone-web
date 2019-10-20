import { AlbumCandidate } from "type/model";

import { albumModel } from "./model/albumModel";
import { normalizeFormAlbum } from "./normalize/formAlbum";

export const submitAlbumCandidate = async (
  album: AlbumCandidate
): Promise<void> => {
  albumModel.createAlbum(normalizeFormAlbum.toMockStorageAlbum(album));
};
