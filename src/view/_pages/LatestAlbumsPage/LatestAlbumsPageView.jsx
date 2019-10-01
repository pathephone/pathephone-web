// @flow strict

import * as React from "react";

import { testId } from "utils/testId";
import { Page } from "view/Page";
import { LoadMoreButton } from "view/LoadMoreButton";
import { useIntlDictionary } from "hooks/useIntl";
import { FeedAlbum } from "view/FeedAlbum";
import { useLatestAlbumsPageState } from "hooks/useLatestAlbumsPageState";
import { useDispatch } from "hooks/useDispatch";
import { useGetLatestAlbumsService } from "hooks/useGetLatestAlbumsService";

import { LatestAlbumsPageWrapper } from "./styled/LatestAlbumsPageWrapper";
import { LatestAlbumsPageText } from "./styled/LatestAlbumsPageText";

type TProps = {||};

export const LatestAlbumsPageView = (props: TProps) => {
  const getLatestAlbums = useGetLatestAlbumsService();

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
      getLatestAlbums(latestPage);
    }
  }, [getLatestAlbums, latestPage]);

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

  const feedItemsNode = React.useMemo(() => {
    return albums.map(item => <FeedAlbum data={item} key={item.id} />);
  }, [albums]);

  return (
    <Page hasLoader={hasPageLoader} centered={hasFallback}>
      {hasFeed && (
        <LatestAlbumsPageWrapper mod="feed">
          {feedItemsNode}
        </LatestAlbumsPageWrapper>
      )}
      {hasFallback && (
        <LatestAlbumsPageText mod="fallback" text={fallbackText} />
      )}
      {hasLoadMoreButton && (
        <LoadMoreButton
          text={loadMoreButtonText}
          hasLoader={hasFeedLoader}
          onClick={onLoadMoreButtonClick}
          buttonTestId={testId.LATEST_LABUMS_PAGE__LOAD_MORE_BUTTON}
          loaderTestId={testId.LATEST_LABUMS_PAGE__FEED_LOADER}
        />
      )}
    </Page>
  );
};
