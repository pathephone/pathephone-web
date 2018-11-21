// @flow strict

import type { TFeedAlbum } from 'types/state'

import * as React from 'react';

import styles from 'styles/AlbumsFeed.module.css'

import { Album } from 'containers/Album';
import { AlbumContextMenu } from 'containers/AlbumContextMenu';
import { useCallback } from 'hooks/useCallback';
import { usePlaylistContext } from 'contexts/playlistContext';

type TProps = {|
  albums: TFeedAlbum[];  
|}

export const AlbumsFeed = ({ albums }: TProps) => {

  const { playlist, setPlaylist } = usePlaylistContext()

  const handlePlayAlbumTracks = useCallback((tracks) => {
    setPlaylist(tracks)
  })

  const handleQueueAlbumTracks = useCallback((tracks) => {
    setPlaylist([ ...playlist, ...tracks ])
  },[playlist])

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