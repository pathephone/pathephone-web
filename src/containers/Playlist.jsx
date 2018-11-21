// @flow strict

import * as React from 'react';

import styles from 'styles/playlist.module.css';

import { useContext } from 'hooks/useContext';
import { useCallback } from 'hooks/useCallback';
import { PlaylistTrack } from 'containers/PlaylistTrack';
import { PlaylistState, PlaylistDispatch } from 'contexts/PlaylistContext';

type TProps = {||}

export const Playlist = () => {

  const playlistState = useContext(PlaylistState)
  const playlistDispatch = useContext(PlaylistDispatch)

  const onClearClick = useCallback(() => {
    playlistDispatch({
      type: 'CLEAR_PLAYLIST'
    })
  })

  return(
    <div className={styles.Playlist__Wrapper}>
      <div className={styles.Playlist__Header}>
        <button 
          className={styles.Playlist__ClearButton}
          onClick={onClearClick}
        >
          clear
        </button>
      </div>
      <div className={styles.Playlist__Body}>
        {
          playlistState.map((track) => (
            <PlaylistTrack 
              {...track}
              key={track.id}
            />
          ))
        }
      </div>
    </div>
  )
}