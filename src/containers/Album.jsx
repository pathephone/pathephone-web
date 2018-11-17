// @flow strict

import type { TFeedAlbum } from 'types/state'
import type { TFeedAlbumContextMenuComponent } from 'containers/AlbumContextMenu'

import * as React from 'react';

import styles from 'styles/Album.module.css'

import { AlbumContextMenu } from 'containers/AlbumContextMenu';

type TProps = {|
  album: TFeedAlbum;
  children: React.Element<TFeedAlbumContextMenuComponent>;
|}

type TState = {|
  hasContextMenu: boolean;  
|}

export class Album extends React.Component<TProps, TState> {

  state = {
    hasContextMenu: false
  }

  showContextMenu = () => {
    this.setState({
      hasContextMenu: true
    })
  }

  render() {
    const { album, children } = this.props;
    const { hasContextMenu } = this.state;
    return (
      <div className={styles.Album__Wrapper}>
        <button 
          className={styles.Album__CoverButton}
          type='button' 
          onClick={this.showContextMenu}
        >
          <img 
            className={styles.Album__CoverImage}
            src={album.coverSrc} 
            alt={album.title} 
          />
        </button>
        <h2 className={styles.Album__Title}>
          {album.title}
        </h2>
        <h3 className={styles.Album__ArtistName}>
          {album.artistName}
        </h3>
        {
          hasContextMenu && children
        }
      </div>
    )
  }


}