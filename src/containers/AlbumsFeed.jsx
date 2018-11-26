// @flow strict

import type { TFeedAlbum } from 'types/state'

import * as React from 'react';

import { Album } from 'containers/Album';
import { useCallback } from 'hooks/useCallback';
import { useContextStrict } from 'hooks/useContext';
import { PlaylistContext } from 'contexts/playlistContext';
import { AlbumActions } from 'containers/AlbumActions';
import { AlbumsFeedWrapper } from 'components/AlbumsFeed/AlbumsFeedWrapper';

type TProps = {|
  albums: TFeedAlbum[];  
|}

export const AlbumsFeed = ({ albums }: TProps) => {

  const { replaceTracks, queueTracks } = useContextStrict(PlaylistContext)

  const handlePlayAlbumTracks = useCallback((tracks) => {
    replaceTracks(tracks)
  }, [])

  const handleQueueAlbumTracks = useCallback((tracks) => {
    queueTracks(tracks)
  }, [])

  return(
    <AlbumsFeedWrapper>
      {
        albums.map((album) => (
          <Album 
            key={album.id} 
            album={album} 
          >
            <AlbumActions
              id={album.id} 
              onPlay={handlePlayAlbumTracks}
              onAddToPlaylist={handleQueueAlbumTracks}
            />
          </Album>
        ))
      }
    </AlbumsFeedWrapper>
  )
}