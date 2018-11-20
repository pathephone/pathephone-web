// @flow strict

import type { TGlobalContext } from 'types/state'

import * as React from 'react';

export const GlobalContext = React.createContext<TGlobalContext | null>(null);