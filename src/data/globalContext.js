// @flow strict

import { apiMethods } from "data/apiMethods";

export const globalContext = {
  apiMethods
};

export type TGlobalContext = typeof globalContext;