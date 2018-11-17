// @flow strict

import type { TFeedAlbum } from 'types/state'

import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';

import styles from 'styles/AlbumsPage.module.css'

import { SearchBar } from 'containers/SearchBar';
import { AlbumsFeed } from 'containers/AlbumsFeed';
import { getAlbumsBySearch } from 'methods/getAlbumsBySearch';
import { getLatestAlbums } from 'methods/getLatestAlbums';
import { toFeedAlbums } from 'utils/toFeedAlbums';

type TProps = {||}

type TState = {|
  albums: null | TFeedAlbum[];
  errorMessage: null | string;
  hasLoader: boolean;
|}

export class AlbumsPage extends React.Component<TProps, TState> {
  state = {
    albums: null,
    errorMessage: null,
    hasLoader: false
  }

  handleAlbumsRequest = () => {
    this.setState({
      hasLoader: true,
      errorMessage: null,
      albums: null
    })
  }
  handleAlbumsResponse = (albums: TFeedAlbum[]) => {
    this.setState({
      albums,
      hasLoader: false,
      errorMessage: null
    })
  }
  handleAlbumsError = (e: Error) => {
    this.setState({
      albums: null,
      hasLoader: false,
      errorMessage: e.message
    })
  }

  handleSearchValueChange = (nextValue: string) => {
    if (nextValue) {
      this.geTFeedAlbumsBySearch(nextValue)
    } else {
      this.getLatesTFeedAlbums()
    }
  }

  geTFeedAlbumsBySearch = (searchValue: string) => {
    this.handleAlbumsRequest()
    getAlbumsBySearch(searchValue)
      .then(toFeedAlbums)
      .then(this.handleAlbumsResponse)
      .catch(this.handleAlbumsError)
  }
  getLatesTFeedAlbums = () => {
    this.handleAlbumsRequest()
    getLatestAlbums()
      .then(toFeedAlbums)
      .then(this.handleAlbumsResponse)
      .catch(this.handleAlbumsError)
  }

  render() {
    const { albums, hasLoader } = this.state
    return(
      <div className={styles.AlbumsPage__Wrapper}>
        <SearchBar
          onSearchValueChange={this.handleSearchValueChange}
        />
        {
          albums && (
            <AlbumsFeed albums={albums} />
          )
        }
        {
          hasLoader && (
            <div className={styles.AlbumsPage__Loader} />
          )
        }
      </div>
    )
  }
}