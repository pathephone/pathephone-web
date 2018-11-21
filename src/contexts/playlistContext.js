// @flow strict

import type { TPlaylistState } from 'types/state'
import type { TPlaylistAction } from 'types/actions'

import * as React from 'react';

type TDispatch = (action: TPlaylistAction) => TPlaylistState;

export const PlaylistDispatch = React.createContext<TDispatch>(() => []);

export const PlaylistState = React.createContext<TPlaylistState>([]);