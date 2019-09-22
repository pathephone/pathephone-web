// @flow strict

import type { TFeedAlbum } from "types/state";

import { asyncTimeout } from "utils/asyncTimeout";
import { SERVICE_MOCK_DELAY } from "data/constants";
import { albumModel } from "./model/albumModel";
import { normalizeMockStorageAlbum } from "./normalize/mockStorageAlbum";

export const getAlbumsByQuery = async (
  query: string
): Promise<TFeedAlbum[]> => {
  await asyncTimeout(SERVICE_MOCK_DELAY);

  const targetAlbums = albumModel.getAlbumsByQuery(query);

  return targetAlbums.map(normalizeMockStorageAlbum.toFeedAlbum);
};
