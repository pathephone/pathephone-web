// @flow strict

import type { TApiMethods } from 'data/apiMethods'
import type { TLocaleStrings } from 'data/localization/en.module'

import * as React from 'react';

export type TLocaleStringsContext = TLocaleStrings

export const LocaleStringsContext = React.createContext<TLocaleStrings | null>(null);