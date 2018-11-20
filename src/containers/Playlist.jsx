// @flow strict

import * as React from 'react';

import { useContext } from 'hooks/useContext';
import { useCallback } from 'hooks/useCallback';
import { useGlobalContext } from 'hooks/useGlobalContext';

import styles from 'styles/playlist.module.css';

type TProps = {||}

export const Playlist = () => {

  const { playlist, setCurrentTrackId, setPlaylistTracks } = useGlobalContext()

  const onPlaylistTrackClick = useCallback((id: number) => {
    setCurrentTrackId(id)
  })

  const onClearClick = useCallback(() => {
    setPlaylistTracks([])
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
          playlist.map((track) => (
            <PlaylistTrack 
              key={track.id}
              title={track.title}
              artist={track.artistName}
              onClick={onPlaylistTrackClick}
            />
          ))
        }
      </div>
    </div>
  )
}