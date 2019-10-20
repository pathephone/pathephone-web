import { AlbumPreview } from "type/model";

import { albumModel } from "./model/albumModel";
import { normalizeMockStorageAlbum } from "./normalize/mockStorageAlbum";

export const getAlbumPreviewsByQuery = async (
  query: string
): Promise<AlbumPreview[]> => {
  const targetAlbums = albumModel.getAlbumsByQuery(query);

  return targetAlbums.map(normalizeMockStorageAlbum.toFeedAlbum);
};
