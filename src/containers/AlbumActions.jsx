// @flow strict

import type { TPlaylistTrack } from 'types/state'

import * as React from 'react';

import styles from 'styles/Album.module.css'

import { getAlbumTracklist } from 'api/getAlbumTracklist';
import { toPlaylistTracks } from 'utils/toPlaylistTracks';
import { useState } from 'hooks/useState';
import { AlbumActionsWrapper } from 'components/AlbumActions/AlbumActionsWrapper';
import { AlbumActionsLoader } from 'components/AlbumActions/AlbumActionsLoader';
import { AlbumActionsButton } from 'components/AlbumActions/AlbumActionsButton';
import { AlbumActionsError } from 'components/AlbumActions/AlbumActionsError';

type TProps = {|
  id: string;
  onPlay(tracks: TPlaylistTrack[]): void;
  onAddToPlaylist(tracks: TPlaylistTrack[]): void;
|}

export const AlbumActions = ({ onAddToPlaylist, onPlay, id }: TProps) => {

  const [errorMessage, setErrorMessage] = useState(null)
  const [hasLoader, setHasLoader] = useState(false)

  const handleError = (e: Error) => {
    setErrorMessage(e.message)
  }

  const toggleLoader = () => {
    setHasLoader(!hasLoader)
  }

  const handlePlayAlbumClick = () => {
    toggleLoader()
    getAlbumTracklist(id)
      .then(toPlaylistTracks)
      .then(onPlay)
      .catch(handleError)
      .then(toggleLoader)
  }

  const handleAddAlbumToPlaylistClick = () => {
    getAlbumTracklist(id)
      .then(toPlaylistTracks)
      .then(onAddToPlaylist)
      .catch(handleError)
      .then(toggleLoader)
  }

  return(
    <AlbumActionsWrapper>
      {
        hasLoader ? (
          <AlbumActionsLoader />
        ) : (
          <>
            <AlbumActionsButton
              onClick={handlePlayAlbumClick}
            >
              play album
            </AlbumActionsButton>
            <AlbumActionsButton
              onClick={handleAddAlbumToPlaylistClick}
            >
              add album to playlist
            </AlbumActionsButton>
          </>
        )
      }
      {
        errorMessage !== null && (
          <AlbumActionsError>
            {errorMessage}
          </AlbumActionsError>
        )
      }
    </AlbumActionsWrapper>
  )
}

export type TFeedAlbumActionsComponent = typeof AlbumActions