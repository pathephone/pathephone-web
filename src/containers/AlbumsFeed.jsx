// @flow strict

import type { TFeedAlbum } from 'types/state'

import * as React from 'react';

import styles from 'styles/AlbumsFeed.module.css'

import { Album } from 'containers/Album';
import { AlbumContextMenu } from 'containers/AlbumContextMenu';
import { PlaylistContext } from 'contexts/Playlist/PlaylistContext';

type TProps = {|
  albums: TFeedAlbum[];  
|}

export const AlbumsFeed = (props: TProps) => {
  const { albums } = props;
  const { replaceTracks, addTracks } = React.useContext(PlaylistContext)
  return (
    <div className={styles.AlbumsFeed__Wrapper}>
      {
        albums.map((album) => (
          <Album 
            key={album.id} 
            album={album} 
          >
            <AlbumContextMenu
              id={album.id} 
              onPlay={replaceTracks}
              onAddToPlaylist={addTracks}
            />
          </Album>
        ))
      }
    </div>
  )
}