// @flow strict

import type { TFeedAlbum } from 'types/state'
import type { TPlaylistTrack } from 'types/state'

import * as React from 'react';

import styles from 'styles/Album.module.css'
import { getAlbumTracklist } from 'methods/getAlbumTracklist';
import { toPlaylistTracks } from 'utils/toPlaylistTracks';

type TProps = {|
  id: string;
  onPlay(tracks: TPlaylistTrack[]): void;
  onAddToPlaylist(tracks: TPlaylistTrack[]): void;
|}

type TState = {|
  errorMessage: null | string;
|}

export class AlbumContextMenu extends React.Component<TProps, TState> {

  state = {
    errorMessage: null
  }

  handleError = (e: Error) => {
    this.setState({
      errorMessage: e.message
    })
  }

  handlePlayAlbumClick = () => {
    const { id } = this.props
    getAlbumTracklist(id)
      .then(toPlaylistTracks)
      .then(this.props.onPlay)
      .catch(this.handleError)
  }

  handleAddAlbumToPlaylistClick = () => {
    const { id } = this.props
    getAlbumTracklist(id)
      .then(toPlaylistTracks)
      .then(this.props.onAddToPlaylist)
      .catch(this.handleError)
  }

  render = () => (
    <div className={styles.Album__ContextMenuWrapper}>
      <button 
        type='button'
        className={styles.Album__ContextMenuButton}
        onClick={this.handlePlayAlbumClick}
      >
        play album
      </button>
      <button 
        className={styles.Album__ContextMenuButton}
        onClick={this.handleAddAlbumToPlaylistClick}
      >
        add album to playlist
      </button>
    </div>
  )

}

export type TFeedAlbumContextMenuComponent = typeof AlbumContextMenu