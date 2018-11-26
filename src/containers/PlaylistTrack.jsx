// @flow strict

import * as React from 'react';

import styles from 'styles/playlistTrack.module.css';

import { useContext, useContextStrict } from 'hooks/useContext';
import { useCallback } from 'hooks/useCallback';
import { PlaylistContext } from 'contexts/playlistContext';

type TProps = {
  id: string;
  title: string;
  artistName: string;
  isPlaying: boolean;
}

export const PlaylistTrack = (
  { id, artistName, title, isPlaying }: TProps
) => {

  const { 
    playTrackById,
    removeTrackById 
  } = useContextStrict(PlaylistContext) 

  const handlePlayButtonClick = useCallback(() => {
    playTrackById(id)
  },[id])

  const handleDeleteButtonClick = useCallback(() => {
    removeTrackById(id)
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