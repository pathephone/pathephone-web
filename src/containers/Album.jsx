// @flow strict

import type { TFeedAlbum } from 'types/state'
import type { TFeedAlbumActionsComponent } from 'containers/AlbumActions'

import * as React from 'react';

import { useState } from 'hooks/useState';
import { AlbumWrapper } from 'components/Album/AlbumWrapper';
import { AlbumCoverButton } from 'components/Album/AlbumCoverButton';
import { AlbumCoverImage } from 'components/Album/AlbumCoverImage';
import { AlbumTitle } from 'components/Album/AlbumTitle';
import { AlbumArtistName } from 'components/Album/AlbumArtistName';

type TProps = {|
  album: TFeedAlbum;
  children: React.Element<TFeedAlbumActionsComponent>;
|}

export const Album = ({ album, children }: TProps) => {

  const [hasContextMenu, toggleContextMenu] = useState(false)

  return (
    <AlbumWrapper>
      <AlbumCoverButton 
        onClick={toggleContextMenu}
      >
        <AlbumCoverImage 
          src={album.coverSrc} 
          alt={album.title} 
        />
      </AlbumCoverButton>
      <AlbumTitle>
        {album.title}
      </AlbumTitle>
      <AlbumArtistName>
        {album.artistName}
      </AlbumArtistName>
      {
        hasContextMenu && children
      }
    </AlbumWrapper>
  )
}