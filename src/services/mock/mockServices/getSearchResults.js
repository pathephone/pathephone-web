// @flow strict

import type { TFeedAlbum } from "types/state";

import { asyncTimeout } from "utils/asyncTimeout";
import { SERVICE_MOCK_DELAY } from "data/constants";

import { queryModel } from "./model/queryModel";

export const getSearchResults = async (
  query: string
): Promise<TFeedAlbum[]> => {
  await asyncTimeout(SERVICE_MOCK_DELAY);
  return queryModel.getInfo(query).results;
};
