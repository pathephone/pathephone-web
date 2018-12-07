// @flow strict

import { mockApi } from "api/mockApi";
import { enLocaleStrings } from "data/localization/en.module";

export const appContextMock = {
  api: mockApi,
  defaultLocaleStrings: enLocaleStrings
};