// @flow strict

import type { TPlaylistState } from 'types/state'
import type { TPlaylistAction } from 'types/actions'

import * as React from 'react';

import { useState } from 'hooks/useState';
import { useReducer } from 'hooks/useReducer';
import { PlaylistDispatch, PlaylistState } from 'contexts/PlaylistContext';
import { playlistReducer } from 'contexts/playlistReducer';

type TProps = {
  children: React.Node;
}

export const PlaylistProvider = ({ children }: TProps) => {

  const [ state, dispatch ] = useReducer<TPlaylistState, TPlaylistAction>(playlistReducer)

  return (
    <PlaylistDispatch.Provider value={dispatch}>
      <PlaylistState.Provider value={state}>
        {children}
      </PlaylistState.Provider>
    </PlaylistDispatch.Provider>
  )
}