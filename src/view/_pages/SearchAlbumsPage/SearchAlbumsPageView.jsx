// @flow strict

import type { TFeedAlbum, TSearchAlbumsPageScreen } from "types/state";

import * as React from "react";

import { FeedAlbum } from "view/FeedAlbum";

import { SearchAlbumsPageHero } from "./styled/SearchAlbumsPageHero";
import { SearchAlbumsPageButton } from "./styled/SearchAlbumsPageButton";
import { SearchAlbumsPageWrapper } from "./styled/SearchAlbumsPageWrapper";
import { SearchAlbumsPageResults } from "./styled/SearchAlbumsPageResults";
import { SearchAlbumsPageLoader } from "./styled/SearchAlbumsPageLoader";
import { SearchAlbumsPageFeed } from "./styled/SearchAlbumsPageFeed";

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
    <SearchAlbumsPageWrapper>
      <SearchAlbumsPageHero
        title={titleText}
        subTitle={screen === "FALLBACK" ? fallbackSubTitleText : subTitleText}
        mod={screen === "FALLBACK" ? "fallback" : "default"}
      />
      <SearchAlbumsPageResults>
        {screen === "LOADING" && <SearchAlbumsPageLoader />}
        {screen === "FALLBACK" && (
          <SearchAlbumsPageButton
            mod="fallback"
            text={fallbackButtonText}
            onClick={onFallbackButtonClick}
          />
        )}
        {screen === "HAS_NEW_RESULTS" && (
          <SearchAlbumsPageButton
            mod="new-results"
            text={newResultsButtonText}
            onClick={onNewResultsButtonClick}
          />
        )}
        {(screen === "HAS_RESULTS" || screen === "HAS_NEW_RESULTS") && (
          <SearchAlbumsPageFeed>{feedItemsNode}</SearchAlbumsPageFeed>
        )}
      </SearchAlbumsPageResults>
    </SearchAlbumsPageWrapper>
  );
};
