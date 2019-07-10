// @flow strict

import type { TFeedAlbum } from "types/state";

import { asyncTimeout } from "utils/asyncTimeout";
import { getFeedAlbumMocks } from "utils/mock";
import { SERVICE_MOCK_DELAY } from "data/constants";

export const getLatestAlbums = async (): Promise<TFeedAlbum[]> => {
  await asyncTimeout(SERVICE_MOCK_DELAY);
  return getFeedAlbumMocks(5);
};
