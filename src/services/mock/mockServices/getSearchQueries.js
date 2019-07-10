// @flow strict

import type { TSearchInfo } from "types/state/index";

import { asyncTimeout } from "utils/asyncTimeout";
import { SERVICE_MOCK_DELAY } from "data/constants";

import { queryModel } from "./model/queryModel";

const SEARCH_QUERIES_PAGE_LIMIT = 20;

type TOutput = {|
  items: TSearchInfo[],
  lastPageFlag: boolean
|};

type TParams = {|
  startPage: number,
  pagesCount?: number
|};

export const getSearchQueries = async (params: TParams): Promise<TOutput> => {
  await asyncTimeout(SERVICE_MOCK_DELAY);

  const { startPage, pagesCount = 1 } = params;

  const allQueries = queryModel.getAll();

  const firstItemIndex = SEARCH_QUERIES_PAGE_LIMIT * (startPage - 1);

  const lastItemIndex = firstItemIndex + SEARCH_QUERIES_PAGE_LIMIT * pagesCount;

  const pageQueries = allQueries.slice(firstItemIndex, lastItemIndex);

  const items = pageQueries.map(query => ({
    text: query.queryText,
    saved: query.saved,
    resultsCount: query.results.length
  }));

  const lastPageFlag = lastItemIndex >= allQueries.length;

  return { items, lastPageFlag };
};
