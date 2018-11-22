// @flow strict

import type { TApiMethods } from 'data/apiMethods'

import * as React from 'react';

export type TApiContext = TApiMethods;

export const ApiContext = React.createContext<TApiContext | null>(null);