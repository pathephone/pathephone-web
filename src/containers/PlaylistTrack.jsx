// @flow strict

import type { TPlaylistTrack } from 'types/state'

import * as React from 'react';

import { useContext } from 'hooks/useContext';
import { useCallback } from 'hooks/useCallback';
import { useGlobalContext } from 'hooks/useGlobalContext';

import styles from 'styles/playlistTrack.module.css';

type TProps = TPlaylistTrack

export const PlaylistTrack = (
  { id, artistName, title }: TProps
) => {

  const { currentTrackId, setCurrentTrackId } = useGlobalContext()

  const isCurrent = currentTrackId === id

  const handlePlayButtonClick = useCallback(() => {
    setCurrentTrackId(id)
  })

  return(
    <div className={styles.PlaylistTrack__Wrapper}>
      <button 
        className={styles.PlaylistTrack__PlayButton}
        onClick={handlePlayButtonClick}
      >
        <span className={PlaylistTrack__Title}>{title}</span>
        <br />
        <span className={PlaylistTrack__ArtistName}>{artistName}</span>
      </button>
    </div>
  )
}