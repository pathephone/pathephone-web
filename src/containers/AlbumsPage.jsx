// @flow strict
import type { TFeedAlbum } from 'types/state'

import * as React from 'react';

import { SearchBar } from 'containers/SearchBar';
import { AlbumsFeed } from 'containers/AlbumsFeed';
import { usePromise } from 'hooks/usePromise';
import { useState } from 'hooks/useState';
import { useContextStrict } from 'hooks/useContext';
import { ApiContext } from 'contexts/ApiContext';
import { usePromiseEffect } from 'hooks/usePromiseEffect';
import { AlbumsPageWrapper } from 'components/AlbumsPage/AlbumsPageWrapper';
import { AlbumsPageLoader } from 'components/AlbumsPage/AlbumsPageLoader';
import { AlbumsPageError } from 'components/AlbumsPage/AlbumsPageError';

export const AlbumsPage = () => {

  const [ searchValue, changeSearchValue ] = useState('')

  const { getAlbums } = useContextStrict(ApiContext)

  const { data, isPending, errorMessage } = usePromiseEffect(
    () => getAlbums(searchValue), [ searchValue ]
  )

  return(
    <AlbumsPageWrapper>
      <SearchBar
        searchValue={searchValue}
        onSearchValueChange={changeSearchValue}
      />
      {
        data !== null && (
          <AlbumsFeed albums={data} />
        )
      }
      {
        isPending && (
          <AlbumsPageLoader />
        )
      }
      {
        errorMessage !== null && (
          <AlbumsPageError>
            {errorMessage}
          </AlbumsPageError>
        )
      }
    </AlbumsPageWrapper>
  )
}