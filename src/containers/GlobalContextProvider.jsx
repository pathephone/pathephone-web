// @flow strict

import type { TPlaylistTrack } from 'types/state'

import * as React from 'react';

import { GlobalContext } from 'contexts/GlobalContext';
import { useState } from 'hooks/useState';

type TProps = {
  children: React.Node;
}

export const GlobalContextProvider = ({ children }: TProps) => {

  const [ playlist, setPlaylistTracks ] = useState<TPlaylistTrack[]>([])
  const [ currentTrackId, setCurrentTrackId ] = useState<number | null>(null)

  const appState = {

    // values
    playlist,
    currentTrackId,

    // setters
    setPlaylistTracks,
    setCurrentTrackId

  }

  return (
    <GlobalContext.Provider value={appState}>
      {children}
    </GlobalContext.Provider>
  )
}