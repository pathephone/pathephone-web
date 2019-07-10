// @flow strict

import type { TFeedAlbum } from "types/state";

import * as React from "react";

import { SearchQueryPageHero } from "./styled/SearchQueryPageHero";
import { SearchQueryPageButton } from "./styled/SearchQueryPageButton";
import { SearchQueryPageFeed } from "./styled/SearchQueryPageFeed";
import { SearchQueryPageFallback } from "./styled/SearchQueryPageFallback";
import { SearchQueryPageLoader } from "./styled/SearchQueryPageLoader";
import { SearchQueryPageWrapper } from "./styled/SearchQueryPageWrapper";
import { SearchQueryPageResults } from "./styled/SearchQueryPageResults";
import { SearchQueryAlbum } from "./nested/SearchQueryAlbum/index";

type TProps = {
  hasLoader: boolean,
  hasSaveSearchButton: boolean,
  hasDeleteSearchButton: boolean,
  hasShowNewResultsButton: boolean,
  hasFallback: boolean,
  hasFeed: boolean,
  titleText: string,
  fallbackText: string,
  saveSearchButtonText: string,
  deleteSearchButtonText: string,
  showNewResultsButtonText: string,
  feedItems: TFeedAlbum[],
  onSaveSearch(): void,
  onDeleteSearch(): void,
  onShowNewResults(): void
};

export const SearchQueryPageView = (props: TProps) => {
  const {
    hasLoader,
    hasSaveSearchButton,
    hasDeleteSearchButton,
    hasShowNewResultsButton,
    hasFallback,
    hasFeed,
    titleText,
    fallbackText,
    saveSearchButtonText,
    deleteSearchButtonText,
    showNewResultsButtonText,
    feedItems,
    onSaveSearch,
    onDeleteSearch,
    onShowNewResults
  } = props;

  const feedItemsNode = React.useMemo(() => {
    return feedItems.map(item => <SearchQueryAlbum info={item} />);
  }, [feedItems]);

  return (
    <SearchQueryPageWrapper>
      <SearchQueryPageHero title={titleText}>
        {hasSaveSearchButton && (
          <SearchQueryPageButton
            mod="save"
            text={saveSearchButtonText}
            onClick={onSaveSearch}
          />
        )}
        {hasDeleteSearchButton && (
          <SearchQueryPageButton
            mod="delete"
            text={deleteSearchButtonText}
            onClick={onDeleteSearch}
          />
        )}
        {hasLoader && <SearchQueryPageLoader />}
      </SearchQueryPageHero>
      <SearchQueryPageResults>
        {hasShowNewResultsButton && (
          <SearchQueryPageButton
            mod="new-results"
            text={showNewResultsButtonText}
            onClick={onShowNewResults}
          />
        )}
        {hasFallback && <SearchQueryPageFallback text={fallbackText} />}
        {hasFeed && <SearchQueryPageFeed>{feedItemsNode}</SearchQueryPageFeed>}
      </SearchQueryPageResults>
    </SearchQueryPageWrapper>
  );
};
