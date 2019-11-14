import * as React from "react";

import { useIntlDictionary } from "hook/useIntlDictionary";
import { useDispatch } from "hook/useDispatch";
import { useGetLatestAlbumsService } from "hook/useGetLatestAlbumsService";
import { useAlbumPreviews } from "hook/useAlbumPreviews";

import { LatestAlbumsPageView } from "./LatestAlbumsPageView";
import { useLists } from "hook/useLists";

export const LatestAlbumsPage = () => {
  const getAlbumPreviewsFeed = useGetLatestAlbumsService();

  const {
    latestAlbumsPage: { fallbackText, loadMoreButtonText }
  } = useIntlDictionary();

  const dispatch = useDispatch();

  const { recentlyPlayedAlbumIdList } = useLists();

  const albumIds = React.useMemo(() => {
    return [...recentlyPlayedAlbumIdList.itemsByPage.values()].reduce(
      (acc, item) => [...acc, ...item],
      []
    );
  }, [recentlyPlayedAlbumIdList.itemsByPage]);

  const nextWantedPage = React.useMemo(() => {
    const nextWantedPage = recentlyPlayedAlbumIdList.wantedPages[0];

    if (nextWantedPage !== undefined) {
      return nextWantedPage;
    }

    return null;
  }, [recentlyPlayedAlbumIdList.wantedPages]);

  const loading = recentlyPlayedAlbumIdList.wantedPages.length !== 0;

  const noMoreAlbums = recentlyPlayedAlbumIdList.ended;

  const albums = useAlbumPreviews(albumIds);

  React.useEffect(() => {
    dispatch({
      type: "LATEST_ALBUMS_PAGE__DID_MOUNT"
    });

    return () => {
      dispatch({
        type: "LATEST_ALBUMS_PAGE__WILL_UNMOUNT"
      });
    };
  }, [dispatch]);

  // Load list on initial render and once page changes
  React.useEffect(() => {
    if (nextWantedPage !== null) {
      getAlbumPreviewsFeed(nextWantedPage);
    }
  }, [getAlbumPreviewsFeed, nextWantedPage]);

  const hasPageLoader = nextWantedPage === 1 && loading;

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
