import { AlbumPreview } from "type/model";
import { setAsyncTimeout } from "util/setAsyncTimeout";
import { SERVICE_MOCK_DELAY } from "util/constant";
import { getAlbumPreviewMocks } from "util/mock/albumPreviewMock";

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

  const items = getAlbumPreviewMocks(10);

  return { items, lastPageFlag: false };
};
