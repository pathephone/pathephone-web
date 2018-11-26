// @flow strict

import * as React from 'react';

import styles from 'styles/playlist.module.css';

import { useContext, useContextStrict } from 'hooks/useContext';
import { useCallback } from 'hooks/useCallback';
import { PlaylistTrack } from 'containers/PlaylistTrack';
import { PlaylistContext } from 'contexts/playlistContext';

type TProps = {||}

export const Playlist = () => {

  const { tracks, replaceTracks } = useContextStrict(PlaylistContext)

  const onClearClick = useCallback(() => {
    replaceTracks([])
  }, [])

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
          tracks.map((track) => (
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