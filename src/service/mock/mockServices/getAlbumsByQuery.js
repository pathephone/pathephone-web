// @flow strict

import type { TFeedAlbum } from "type/state";

import { setAsyncTimeout } from "util/setAsyncTimeout";
import { SERVICE_MOCK_DELAY } from "util/constant";

import { albumModel } from "./model/albumModel";
import { normalizeMockStorageAlbum } from "./normalize/mockStorageAlbum";

export const getAlbumsByQuery = async (
  query: string
): Promise<TFeedAlbum[]> => {
  await setAsyncTimeout(SERVICE_MOCK_DELAY);

  const targetAlbums = albumModel.getAlbumsByQuery(query);

  return targetAlbums.map(normalizeMockStorageAlbum.toFeedAlbum);
};
