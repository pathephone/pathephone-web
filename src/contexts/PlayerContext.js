// @flow strict

import type { TPlayerContext } from 'types/contextTypes'

import * as React from 'react';

export const PlayerContext = React.createContext<TPlayerContext | null>(null);