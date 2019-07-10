// @flow strict

import { asyncTimeout } from "utils/asyncTimeout";
import { SERVICE_MOCK_DELAY } from "data/constants";

import { queryModel } from "./model/queryModel";

export const deleteSearch = async (query: string) => {
  await asyncTimeout(SERVICE_MOCK_DELAY);
  queryModel.setSavedState(query, false);
};
