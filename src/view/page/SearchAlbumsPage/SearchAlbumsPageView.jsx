// @flow strict

import type { TFeedAlbum, TSearchAlbumsPageScreen } from "type/state";

import * as React from "react";

import { FeedAlbum } from "view/widget/FeedAlbum";
import { testId } from "util/testId";

import { SearchAlbumsPageHero } from "./styled/SearchAlbumsPageHero";
import { SearchAlbumsPageButton } from "./styled/SearchAlbumsPageButton";
import { SearchAlbumsPageWrapper } from "./styled/SearchAlbumsPageWrapper";
import { SearchAlbumsPageLoader } from "./styled/SearchAlbumsPageLoader";
import { SearchAlbumsPageFeed } from "./styled/SearchAlbumsPageFeed";
import { SearchAlbumsPageBody } from "./styled/SearchAlbumsPageBody";
import { SearchAlbumsPageTitle } from "./styled/SearchAlbumsPageTitle";
import { SearchAlbumsPageSubTitle } from "./styled/SearchAlbumsPageSubTitle";

type TProps = {|
  screen: TSearchAlbumsPageScreen,
  titleText: string,
  subTitleText: string,
  fallbackSubTitleText: string,
  fallbackButtonText: string,
  newResultsButtonText: string,
  feedItems: TFeedAlbum[],
  onNewResultsButtonClick(): void,
  onFallbackButtonClick(): void
|};

export const SearchAlbumsPageView = (props: TProps) => {
  const {
    screen,
    titleText,
    subTitleText,
    fallbackSubTitleText,
    newResultsButtonText,
    fallbackButtonText,
    feedItems,
    onNewResultsButtonClick,
    onFallbackButtonClick
  } = props;

  const feedItemsNode = React.useMemo(() => {
    return feedItems.map(item => <FeedAlbum data={item} key={item.id} />);
  }, [feedItems]);

  return (
    <SearchAlbumsPageWrapper screen={screen}>
      <SearchAlbumsPageHero>
        <SearchAlbumsPageTitle
          text={titleText}
          testId={testId.SEARCH_ALBUMS_PAGE__TITLE}
        />
        <SearchAlbumsPageSubTitle
          text={screen === "FALLBACK" ? fallbackSubTitleText : subTitleText}
          testId={testId.SEARCH_ALBUMS_PAGE__SUB_TITLE}
        />
      </SearchAlbumsPageHero>
      <SearchAlbumsPageBody>
        {screen === "LOADING" && (
          <SearchAlbumsPageLoader testId={testId.SEARCH_ALBUMS_PAGE__LOADER} />
        )}
        {screen === "FALLBACK" && (
          <SearchAlbumsPageButton
            testId={testId.SEARCH_ALBUMS_PAGE__FALLBACK_BUTTON}
            text={fallbackButtonText}
            onClick={onFallbackButtonClick}
          />
        )}
        {screen === "HAS_NEW_RESULTS" && (
          <SearchAlbumsPageButton
            testId={testId.SEARCH_ALBUMS_PAGE__NEW_RESULTS_BUTTON}
            text={newResultsButtonText}
            onClick={onNewResultsButtonClick}
          />
        )}
        {(screen === "HAS_RESULTS" || screen === "HAS_NEW_RESULTS") && (
          <SearchAlbumsPageFeed testId={testId.SEARCH_ALBUMS_PAGE__FEED}>
            {feedItemsNode}
          </SearchAlbumsPageFeed>
        )}
      </SearchAlbumsPageBody>
    </SearchAlbumsPageWrapper>
  );
};
