// @flow strict

import * as React from 'react';

import styles from 'styles/AlbumsPage.module.css'

import { SearchBar } from 'containers/SearchBar';
import { AlbumsFeed } from 'containers/AlbumsFeed';
import { usePromise } from 'hooks/usePromise';
import { getAlbums } from 'methods/getAlbums';

export const AlbumsPage = () => {
  const [ searchValue, changeSearchValue ] = React.useState('')
  const [ albums, hasLoader, errorMessage ] = usePromise(getAlbums)(searchValue)

  return(
    <div className={styles.AlbumsPage__Wrapper}>
      <SearchBar
        searchValue={searchValue}
        onSearchValueChange={changeSearchValue}
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
      {
        errorMessage !== null && (
          <h1>{errorMessage}</h1>
        )
      }
    </div>
  )
}