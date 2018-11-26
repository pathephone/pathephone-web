// @flow strict

import { apiMethods } from "data/apiMethods";
import { enLocaleStrings } from "data/localization/en.module";

export const globalContext = {
  apiMethods,
  defaultLocaleStrings: enLocaleStrings
};

export type TGlobalContext = typeof globalContext;