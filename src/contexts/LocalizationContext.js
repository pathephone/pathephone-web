// @flow strict

import type { TApiMethods } from 'data/apiMethods'
import type { TLocaleStrings } from 'data/localization/en.module'

import * as React from 'react';

export type TLocalizationContext = {|
  localeName: string;
  localeStrings: TLocaleStrings | null;
  errorMessage: string | null;
  setLocaleName(nextName: string): void;
|}

export const LocalizationContext = React.createContext<TLocalizationContext | null>(null);