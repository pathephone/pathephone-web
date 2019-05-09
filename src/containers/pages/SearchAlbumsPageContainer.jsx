// @flow strict

import type { TServicesContext } from "types/contextTypes";

import * as React from "react";

import { ServicesContext } from "contexts/ServicesContext";
import { useContextStrict } from "hooks/useContextStrict";
import { AlbumsFeedWrapper } from "components/AlbumsFeed/AlbumsFeedWrapper";
import { FeedAlbumContainer } from "containers/FeedAlbumContainer";
import { PageWrapper } from "components/Page/PageWrapper";
import { AppLoadingScreen } from "components/App/AppLoadingScreen";
import { useAsync } from "hooks/useAsync";

type TProps = {|
  match: {
    params: {
      query: string
    }
  }
|};

export const SearchAlbumsPageContainer = (props: TProps) => {
  const searchValue = props.match.params.query;

  const { getAlbumsByMatcher } = useContextStrict<TServicesContext>(
    ServicesContext
  );

  const [albumsState, getAlbums] = useAsync(getAlbumsByMatcher);

  React.useEffect(() => {
    getAlbums(searchValue);
  }, [getAlbums, searchValue]);

  const handleLoadMore = () => {
    // TODO: load more albums
  };

  const hasLoadingScreen = !!albumsState && albumsState.pending;

  const albums = albumsState && albumsState.data;

  return (
    <PageWrapper>
      {hasLoadingScreen && <AppLoadingScreen />}
      {albums !== null && (
        <AlbumsFeedWrapper onLoadMore={handleLoadMore}>
          {albums.map(item => (
            <FeedAlbumContainer data={item} key={item.id} />
          ))}
        </AlbumsFeedWrapper>
      )}
    </PageWrapper>
  );
};
