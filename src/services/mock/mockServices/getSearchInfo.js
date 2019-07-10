// @flow strict

import type { TSearchInfo } from "types/state";

import { asyncTimeout } from "utils/asyncTimeout";
import { SERVICE_MOCK_DELAY } from "data/constants";

import { queryModel } from "./model/queryModel";

export const getSearchInfo = async (query: string): Promise<TSearchInfo> => {
  await asyncTimeout(SERVICE_MOCK_DELAY);
  const record = queryModel.getInfo(query);
  return {
    text: record.queryText,
    saved: record.saved,
    resultsCount: record.results.length
  };
};
