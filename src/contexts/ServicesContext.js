// @flow strict

import type { TServices } from 'types/contextTypes'

import * as React from 'react';

export const ServicesContext = React.createContext<TServices | null>(null);