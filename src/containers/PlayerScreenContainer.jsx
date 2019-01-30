// @flow strict
import type { TPlaylistTrack } from 'types/uiDataTypes';

import * as React from 'react';

import { PlayerScreenWrapper } from 'components/PlayerScreen/PlayerScreenWrapper';
import { HeaderContainer } from 'containers/HeaderContainer';
import { PageContainer } from 'containers/PageContainer';
import { PlaybackControlsContainer } from './PlaybackControlsContainer';
import { PlayerContext } from 'contexts/PlayerContext';

type TProps = {|
|}

export const PlayerScreenContainer = (props: TProps) => {

  const [ isPaused, setIsPaused ] = React.useState<boolean>(false)
  const [ playlist, setPlaylist ] = React.useState<TPlaylistTrack[]>([])
  const [ playingTrackId, setPlayingTrackId ] = React.useState<number | null>(null)

  const clearPlaylist = () => {
    setPlaylist([])
  }

  const addPlaylistTracks = (id: number) => {
    setPlaylist(
      playlist.filter(track => track.id !== id)
    )
  }

  const removePlaylistTrack = (id: number) => {
    setPlaylist(
      playlist.filter(track => track.id !== id)
    )
  }

  const toggleIsPaused = () => {
    setIsPaused(!isPaused)
  }

  const playerContextValue = {
    playlist,
    isPaused,
    playingTrackId,

    setPlayingTrackId,
    addPlaylistTracks,
    removePlaylistTrack,
    clearPlaylist,
    toggleIsPaused
  }

  return (
    <PlayerContext.Provider value={playerContextValue}>
      <PlayerScreenWrapper>
        <PageContainer />
        <HeaderContainer />
        <PlaybackControlsContainer />
      </PlayerScreenWrapper>
    </PlayerContext.Provider>
  )
}
