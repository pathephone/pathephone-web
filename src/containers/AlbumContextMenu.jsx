// @flow strict

import type { TPlaylistTrack } from 'types/state'

import * as React from 'react';

import styles from 'styles/Album.module.css'
import { getAlbumTracklist } from 'methods/getAlbumTracklist';
import { toPlaylistTracks } from 'utils/toPlaylistTracks';
import { useState } from 'hooks/useState';

type TProps = {|
  id: string;
  onPlay(tracks: TPlaylistTrack[]): void;
  onAddToPlaylist(tracks: TPlaylistTrack[]): void;
|}

export const AlbumContextMenu = ({ onAddToPlaylist, onPlay, id }: TProps) => {

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
    <div className={styles.Album__ContextMenuWrapper}>
      {
        hasLoader ? (
          <div className={styles.Album__ContextMenuLoader} />
        ) : (
          <>
            <button 
              type='button'
              className={styles.Album__ContextMenuButton}
              onClick={handlePlayAlbumClick}
            >
              play album
            </button>
            <button 
              className={styles.Album__ContextMenuButton}
              onClick={handleAddAlbumToPlaylistClick}
            >
              add album to playlist
            </button>
          </>
        )
      }
      {
        errorMessage !== null && (
          <h1>{errorMessage}</h1>
        )
      }
    </div>
  )
}

export type TFeedAlbumContextMenuComponent = typeof AlbumContextMenu