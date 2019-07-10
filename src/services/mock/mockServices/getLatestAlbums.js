// @flow strict

import type { TFeedAlbum } from "types/state";

import { asyncTimeout } from "utils/asyncTimeout";
import { getFeedAlbumMocks } from "utils/mock";
import { SERVICE_MOCK_DELAY } from "data/constants";

type TOutput = {|
  items: TFeedAlbum[],
  lastPageFlag: boolean
|};

export const getLatestAlbums = async (): Promise<TOutput> => {
  await asyncTimeout(SERVICE_MOCK_DELAY);

  const items = getFeedAlbumMocks(5);

  const lastPageFlag = false;

  return { items, lastPageFlag };
};
