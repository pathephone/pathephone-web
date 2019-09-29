// @flow strict

import * as React from "react";

import { testId } from "utils/testId";
import { Page } from "view/Page";
import { LoadMoreButton } from "view/LoadMoreButton";
import { useIntlDictionary } from "hooks/useIntl";
import { FeedAlbum } from "view/FeedAlbum";

import { LatestAlbumsPageWrapper } from "./styled/LatestAlbumsPageWrapper";
import { LatestAlbumsPageText } from "./styled/LatestAlbumsPageText";
import { useGetLatestAlbums } from "./utils/useGetLatestAlbums";

type TProps = {||};

export const LatestAlbumsPage = (props: TProps) => {
  const { latestAlbumsPage } = useIntlDictionary();

  const { fallbackText, loadMoreButtonText } = latestAlbumsPage;

  const [hasPageLoader, setHasPageLoader] = React.useState(true);

  // Inject get latest albums service state
  const { list, lastPageFlag, pending, loadNextPage } = useGetLatestAlbums();

  // Turn on page laoder while first search queries page loads
  React.useEffect(() => {
    if (!list && pending) {
      setHasPageLoader(true);
    }
  }, [list, pending]);

  // Turn off page loader once search queries list loaded
  React.useEffect(() => {
    if (!pending) {
      setHasPageLoader(false);
    }
  }, [pending]);

  const onLoadMoreButtonClick = loadNextPage;

  const hasFeed = !!list && list.length > 0;

  const hasFeedLoader = !!list && list.length > 0 && pending;

  const hasFallback = !!list && list.length === 0;

  const hasLoadMoreButton = !!list && list.length > 0 && !lastPageFlag;

  const albums = list || [];

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