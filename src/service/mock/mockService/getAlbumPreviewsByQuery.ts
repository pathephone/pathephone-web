import { AlbumPreview } from "type/model";
import { setAsyncTimeout } from "util/setAsyncTimeout";
import { SERVICE_MOCK_DELAY } from "util/constant";
import { getAlbumPreviewMocks } from "util/mock/albumPreviewMock";

export const getAlbumPreviewsByQuery = async (
  query: string
): Promise<AlbumPreview[]> => {
  await setAsyncTimeout(SERVICE_MOCK_DELAY);

  return getAlbumPreviewMocks(5);
};
