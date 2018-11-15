// @flow strict

import type { TAlbum } from 'types/albums'

import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { AlbumsPageWrapper } from 'components/AlbumsPageWrapper';
import { getAlbumsBySearch } from 'methods/getAlbumsBySearch';
import { getLatestAlbums } from 'methods/getLatestAlbums';
import { SearchBar } from 'containers/SearchBar';

type TProps = {||}

type TState = {|
  albums: null | TAlbum[];
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
  handleAlbumsResponse = (albums: TAlbum[]) => {
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
      this.getAlbumsBySearch(nextValue)
    } else {
      this.getLatestAlbums()
    }
  }

  getAlbumsBySearch = (searchValue: string) => {
    this.handleAlbumsRequest()
    getAlbumsBySearch(searchValue)
      .then(this.handleAlbumsResponse)
      .catch(this.handleAlbumsError)
  }
  getLatestAlbums = () => {
    this.handleAlbumsRequest()
    getLatestAlbums()
      .then(this.handleAlbumsResponse)
      .catch(this.handleAlbumsError)
  }

  render() {
    const { albums, hasLoader } = this.state
    return(
      <AlbumsPageWrapper>
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
            <PageLoader />
          )
        }
      </AlbumsPageWrapper>
    )
  }
}