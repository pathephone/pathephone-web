// @flow strict

import type { TFeedAlbum } from 'types/state'

import * as React from 'react';

import styles from 'styles/AlbumsFeed.module.css'

import { Album } from 'containers/Album';
import { AlbumContextMenu } from 'containers/AlbumContextMenu';
import { useGlobalContext } from 'hooks/useGlobalContext';
import { useCallback } from 'hooks/useCallback';

type TProps = {|
  albums: TFeedAlbum[];  
|}

export const AlbumsFeed = ({ albums }: TProps) => {

  const { playlist, setPlaylistTracks } = useGlobalContext()

  const handlePlayAlbumTracks = useCallback((tracks) => {
    setPlaylistTracks(tracks)
  })

  const handleQueueAlbumTracks = useCallback((tracks) => {
    setPlaylistTracks([ ...playlist, ...tracks ])
  })

  return(
    <div className={styles.AlbumsFeed__Wrapper}>
      {
        albums.map((album) => (
          <Album 
            key={album.id} 
            album={album} 
          >
            <AlbumContextMenu
              id={album.id} 
              onPlay={handlePlayAlbumTracks}
              onAddToPlaylist={handleQueueAlbumTracks}
            />
          </Album>
        ))
      }
    </div>
  )
}