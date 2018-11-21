// @flow strict

import * as React from 'react';

import styles from 'styles/playlistTrack.module.css';

import { useContext } from 'hooks/useContext';
import { useCallback } from 'hooks/useCallback';
import { PlaylistState, PlaylistDispatch } from 'contexts/PlaylistContext';

type TProps = {
  id: string;
  title: string;
  artistName: string;
  isCurrent: boolean;
}

export const PlaylistTrack = (
  { id, artistName, title, isCurrent }: TProps
) => {

  const playlistState = useContext(PlaylistState)
  const playlistDispatch = useContext(PlaylistDispatch)

  const handlePlayButtonClick = useCallback(() => {
    playlistDispatch({
      type: 'PLAY_TRACK',
      payload: id 
    })
  },[id])

  const handleDeleteButtonClick = useCallback(() => {
    playlistDispatch({
      type: 'DELETE_TRACK',
      payload: id 
    })
  },[id])

  return(
    <div className={styles.PlaylistTrack__Wrapper}>
      <button 
        type='button'
        className={styles.PlaylistTrack__PlayButton}
        onClick={handlePlayButtonClick}
      >
        <span className={styles.PlaylistTrack__Title}>{title}</span>
        <br />
        <span className={styles.PlaylistTrack__ArtistName}>{artistName}</span>
      </button>
      <button
        type='button'
        className={styles.PlaylistTrack__DeleteButton}
        onClick={handleDeleteButtonClick}
      >
        x
      </button>
    </div>
  )
}