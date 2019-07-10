// @flow strict

import { asyncTimeout } from "utils/asyncTimeout";
import { queryModel } from "./model/queryModel";
import { SERVICE_MOCK_DELAY } from "data/constants";

export const saveSearch = async (query: string) => {
  await asyncTimeout(SERVICE_MOCK_DELAY);
  queryModel.setSavedState(query, true);
};
