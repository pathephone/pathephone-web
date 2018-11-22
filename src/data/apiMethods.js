// @flow strict

import { getLocaleStrings } from "api/getLocaleStrings";
import { getBrowserLocale } from "api/getBrowserLocale";
import { startApp } from "api/startApp";

export const apiMethods = {
  getLocaleStrings,
  getBrowserLocale,
  startApp
};

export type TApiMethods = typeof apiMethods;
