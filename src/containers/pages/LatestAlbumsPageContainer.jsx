// @flow strict

import * as React from "react";

import { FeedAlbumContainer } from "containers/FeedAlbumContainer";
import { Page } from "components/Page";
import { AppLoadingScreen } from "components/App/AppLoadingScreen";
import { useAsync } from "hooks/useAsync";
import { useServices } from "hooks/useServices";
import { AlbumsFeed } from "components/AlbumsFeed/index";

type TProps = {||};

export const LatestAlbumsPageContainer = (props: TProps) => {
  const { getLatestAlbums } = useServices();

  const [albumsState, onGetAlbums] = useAsync(getLatestAlbums);

  React.useEffect(() => {
    onGetAlbums();
  }, [onGetAlbums]);

  const handleLoadMore = () => {
    // TODO: load more albums
  };

  const hasLoadingScreen = !!albumsState && albumsState.pending;

  const albums = albumsState && albumsState.value;

  return (
    <Page>
      {hasLoadingScreen && <AppLoadingScreen />}
      {albums !== null && (
        <AlbumsFeed onLoadMore={handleLoadMore}>
          {albums.map(item => (
            <FeedAlbumContainer data={item} key={item.id} />
          ))}
        </AlbumsFeed>
      )}
    </Page>
  );
};
