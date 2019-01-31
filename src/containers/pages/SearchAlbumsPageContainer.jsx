// @flow strict

import type { TServicesContext } from 'types/contextTypes';
import type { TFeedAlbum } from "types/stateTypes";

import * as React from 'react';

import { ServicesContext } from 'contexts/ServicesContext';
import { useContextStrict } from 'hooks/useContextStrict';
import { usePromiseEffect } from 'hooks/usePromiseEffect';
import { AlbumsFeedWrapper } from 'components/AlbumsFeed/AlbumsFeedWrapper';
import { FeedAlbumContainer } from 'containers/FeedAlbumContainer';
import { PageWrapper } from 'components/Page/PageWrapper';
import { AppLoadingScreen } from 'components/App/AppLoadingScreen';

type TProps = {|
  match: {
    params: {
      query: string;
    }
  }
|}

export const SearchAlbumsPageContainer = (props: TProps) => {

  const searchValue = props.match.params.query;

  const { getAlbumsByMatcher } = useContextStrict<TServicesContext>(ServicesContext)

  const { isPending, data } = usePromiseEffect<TFeedAlbum[]>(() => getAlbumsByMatcher(searchValue), []);

  return (
    <PageWrapper>
      {
        isPending && (
          <AppLoadingScreen />
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
