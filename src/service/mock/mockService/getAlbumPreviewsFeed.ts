import { AlbumPreview } from "type/model";

import { setAsyncTimeout } from "util/setAsyncTimeout";
import { SERVICE_MOCK_DELAY, ALBUMS_FEED_PER_PAGE_LIMIT } from "util/constant";

import { albumModel } from "./model/albumModel";
import { normalizeMockStorageAlbum } from "./normalize/mockStorageAlbum";

type TOutput = {
  items: AlbumPreview[];
  lastPageFlag: boolean;
};

type TParams = {
  startPage: number;
  pagesCount?: number;
};

export const getAlbumPreviewsFeed = async (
  params: TParams
): Promise<TOutput> => {
  await setAsyncTimeout(SERVICE_MOCK_DELAY);

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
