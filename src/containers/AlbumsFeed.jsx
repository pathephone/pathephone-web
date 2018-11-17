// @flow strict

import type { TFeedAlbum } from 'types/state'

import * as React from 'react';

import styles from 'styles/AlbumsFeed.module.css'

import { Album } from 'containers/Album';
import { AlbumContextMenu } from 'containers/AlbumContextMenu';
import { PlaylistConsumer } from 'contexts/Playlist/PlaylistConsumer';

type TProps = {|
  albums: TFeedAlbum[];  
|}

export class AlbumsFeed extends React.Component<TProps> {

  render() {
    const { albums } = this.props;
    return (
      <div className={styles.AlbumsFeed__Wrapper}>
        {
          albums.map(this.renderAlbum)
        }
      </div>
    )
  }

  renderAlbum = (album: TFeedAlbum) => {
    return(
      <PlaylistConsumer>
        {
          ({ replaceTracks, addTracks }) => (
            <Album 
              album={album} 
              key={album.id} 
            >
              <AlbumContextMenu
                id={album.id} 
                onPlay={replaceTracks}
                onAddToPlaylist={addTracks}
              />
            </Album>
          )
        }
      </PlaylistConsumer>
    )
  }

}