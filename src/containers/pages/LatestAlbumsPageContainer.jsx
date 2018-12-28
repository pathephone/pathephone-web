// @flow strict

import type { TServices } from 'types/contextTypes';
import type { TFeedAlbum } from "types/uiDataTypes";

import * as React from 'react';

import { ServicesContext } from 'contexts/ServicesContext';
import { useContextStrict } from 'hooks/useContextStrict';
import { usePromiseEffect } from 'hooks/usePromiseEffect';
import { AlbumsFeedWrapper } from 'components/AlbumsFeed/AlbumsFeedWrapper';
import { FeedAlbumContainer } from 'containers/FeedAlbumContainer';
import { PageWrapper } from 'components/Page/PageWrapper';

type TProps = {|
|}

export const LatestAlbumsPageContainer = (props: TProps) => {

  const { getLatestAlbums } = useContextStrict<TServices>(ServicesContext)

  const { isPending, data, error } = usePromiseEffect<TFeedAlbum[], []>(getLatestAlbums, []);

  return (
    <PageWrapper>
      {
        isPending && (
          <h1>loading...</h1>
        )
      }
      {
        (error !== null) && (
          <h1>
            {error.message} 
          </h1>
        )
      }
      {
        data !== null && (
          <AlbumsFeedWrapper>
            {
              data.map(item => <FeedAlbumContainer data={item} key={item.id} />)
            }
          </AlbumsFeedWrapper>
        )
      }
    </PageWrapper>
  )
}
