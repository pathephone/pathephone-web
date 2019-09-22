// @flow strict

import type { TSearchAlbumsPageScreen } from "types/state";

import React from "react";

import { useIntlDictionary } from "hooks/useIntl";
import { ALBUMS_SEARCH_INTERVAL } from "data/constants";

import { SearchAlbumsPageView } from "./SearchAlbumsPageView";
import { useSearchAlbumsService } from "./utils/useSearchAlbumsService";

type TProps = {|
  searchQuery: string,
  searchInterval?: number
|};

export const SearchAlbumsPage = (props: TProps) => {
  const { searchQuery, searchInterval = ALBUMS_SEARCH_INTERVAL } = props;

  const {
    searchAlbumsPage: {
      subTitleText,
      fallbackSubTitleText,
      newResultsButtonText,
      fallbackButtonText
    }
  } = useIntlDictionary();

  const {
    results,
    hasNewResults,
    mergeResults,
    failed,
    start
  } = useSearchAlbumsService({
    query: searchQuery,
    updateInterval: searchInterval
  });

  // State normalization

  const titleText = searchQuery;

  const feedItems = results;

  const onNewResultsButtonClick = mergeResults;

  const onFallbackButtonClick = start;

  const screen = React.useMemo<TSearchAlbumsPageScreen>(() => {
    if (!failed && results.length > 0) {
      if (!hasNewResults) {
        return "HAS_RESULTS";
      } else {
        return "HAS_NEW_RESULTS";
      }
    }

    if (!failed && results.length === 0) {
      return "LOADING";
    }

    if (failed && results.length === 0) {
      return "FALLBACK";
    }

    throw new TypeError();
  }, [failed, hasNewResults, results.length]);

  const viewProps = {
    screen,
    titleText,
    subTitleText,
    fallbackSubTitleText,
    newResultsButtonText,
    fallbackButtonText,
    feedItems,
    onNewResultsButtonClick,
    onFallbackButtonClick
  };

  return <SearchAlbumsPageView {...viewProps} />;
};
