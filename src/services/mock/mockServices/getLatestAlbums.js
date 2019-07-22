// @flow strict

import type { TFeedAlbum } from "types/state";

import { asyncTimeout } from "utils/asyncTimeout";
import { SERVICE_MOCK_DELAY, ALBUMS_FEED_PER_PAGE_LIMIT } from "data/constants";
import { albumModel } from "./model/albumsModel";
import { normalizeMockStorageAlbum } from "./normalize/mockStorageAlbum";

type TOutput = {|
  items: TFeedAlbum[],
  lastPageFlag: boolean
|};

type TParams = {|
  startPage: number,
  pagesCount?: number
|};

export const getLatestAlbums = async (params: TParams): Promise<TOutput> => {
  await asyncTimeout(SERVICE_MOCK_DELAY);

  const { startPage, pagesCount = 1 } = params;

  const firstIndex = (startPage - 1) * ALBUMS_FEED_PER_PAGE_LIMIT;

  const lastIndex = firstIndex + ALBUMS_FEED_PER_PAGE_LIMIT * pagesCount;

  const items = albumModel
    .getAllAlbums(firstIndex, lastIndex)
    .map(normalizeMockStorageAlbum.toFeedAlbum);

  const lastAlbumIndex = albumModel.getLastAlbumIndex();

  const lastPageFlag = lastIndex >= lastAlbumIndex;

  return { items, lastPageFlag };
};
