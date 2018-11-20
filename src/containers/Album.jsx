// @flow strict

import type { TFeedAlbum } from 'types/state'
import type { TFeedAlbumContextMenuComponent } from 'containers/AlbumContextMenu'

import * as React from 'react';

import styles from 'styles/Album.module.css'
import { useState } from 'hooks/useState';

type TProps = {|
  album: TFeedAlbum;
  children: React.Element<TFeedAlbumContextMenuComponent>;
|}

export const Album = ({ album, children }: TProps) => {

  const [hasContextMenu, toggleContextMenu] = useState(false)

  return (
    <div className={styles.Album__Wrapper}>
      <button 
        className={styles.Album__CoverButton}
        type='button' 
        onClick={toggleContextMenu}
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
