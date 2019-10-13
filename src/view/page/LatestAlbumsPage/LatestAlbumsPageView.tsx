import { TFeedAlbum } from "type/state";

import * as React from "react";

import { testId } from "util/testId";
import { Page } from "view/kit/Page";
import { LoadMoreButton } from "view/kit/LoadMoreButton";
import { FeedAlbum } from "view/widget/FeedAlbum";

import { LatestAlbumsPageWrapper } from "./styled/LatestAlbumsPageWrapper";
import { LatestAlbumsPageText } from "./styled/LatestAlbumsPageText";

type TProps = {
  hasLoadMoreButton: boolean;
  hasPageLoader: boolean;
  hasFeed: boolean;
  hasFeedLoader: boolean;
  hasFallback: boolean;
  albums: TFeedAlbum[];
  fallbackText: string;
  loadMoreButtonText: string;
  onLoadMoreButtonClick(): void;
};

export const LatestAlbumsPageView = (props: TProps) => {
  const {
    hasLoadMoreButton,
    hasPageLoader,
    hasFeed,
    hasFeedLoader,
    hasFallback,
    albums,
    fallbackText,
    loadMoreButtonText,
    onLoadMoreButtonClick
  } = props;

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
