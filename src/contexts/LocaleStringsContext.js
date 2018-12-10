// @flow strict

import type { TLocaleStrings } from 'types/contextTypes'

import * as React from 'react';

export type TLocaleStringsContext = TLocaleStrings

export const LocaleStringsContext = React.createContext<TLocaleStrings | null>(null);