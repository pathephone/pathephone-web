// @flow strict

import type { TServicesContext } from 'types/contextTypes'

import * as React from 'react';

export const ServicesContext = React.createContext<TServicesContext | null>(null);