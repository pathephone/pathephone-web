// @flow strict

import type { TLocaleStringsContext } from "types/contextTypes";

import * as React from "react";

export type TLocaleStringsContextContext = TLocaleStringsContext;

export const LocaleStringsContext = React.createContext<TLocaleStringsContext | null>(
  null
);
