import * as React from "react";

import { useIntlDictionary } from "hook/useIntl";
import { useLatestAlbumsPageState } from "hook/useLatestAlbumsPageState";
import { useDispatch } from "hook/useDispatch";
import { useGetLatestAlbumsService } from "hook/useGetLatestAlbumsService";

import { LatestAlbumsPageView } from "./LatestAlbumsPageView";

type TProps = {};

export const LatestAlbumsPageContainer = (props: TProps) => {
  const getAlbumPreviewsFeed = useGetLatestAlbumsService();

  const {
    latestAlbumsPage: { fallbackText, loadMoreButtonText }
  } = useIntlDictionary();

  const dispatch = useDispatch();

  const {
    albums,
    loading,
    latestPage,
    noMoreAlbums
  } = useLatestAlbumsPageState();

  // Load list on initial render and once page changes
  React.useEffect(() => {
    if (latestPage !== null) {
      getAlbumPreviewsFeed(latestPage);
    }
  }, [getAlbumPreviewsFeed, latestPage]);

  const hasPageLoader = latestPage === 1 && loading;

  const hasFeed = albums.length > 0;

  const hasFeedLoader = albums.length > 0 && loading;

  const hasFallback = albums.length === 0 && noMoreAlbums;

  const hasLoadMoreButton = albums.length > 0 && !noMoreAlbums;

  const onLoadMoreButtonClick = React.useCallback(() => {
    if (!loading) {
      dispatch({
        type: "LATEST_ALBUMS_PAGE__LOAD_MORE"
      });
    }
  }, [dispatch, loading]);

  const viewProps = {
    hasLoadMoreButton,
    hasPageLoader,
    hasFeed,
    hasFeedLoader,
    hasFallback,
    albums,
    fallbackText,
    loadMoreButtonText,
    onLoadMoreButtonClick
  };

  return <LatestAlbumsPageView {...viewProps} />;
};
