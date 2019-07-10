// @flow strict

import type { TSearchInfo } from "types/state";

import React from "react";

import { Page } from "view/Page";

import { SearchQueriesPageFeed } from "./styled/SearchQueriesPageFeed";
import { SearchQueriesPageFallback } from "./styled/SearchQueriesPageFallback";
import { SearchQueryItem } from "./nested/SearchQueryItem/index";
import { LoadMoreButton } from "view/LoadMoreButton/index";
import { testId } from "utils/testId";

type TProps = {
  hasPageLoader: boolean,
  hasFallback: boolean,
  hasFeed: boolean,
  hasFeedLoader: boolean,
  hasLoadMoreButton: boolean,
  loadMoreButtonText: string,
  fallbackText: string,
  queriesList: TSearchInfo[],
  onDeleteQuery(queryText: string): void,
  onLoadMore(): void
};

export const SearchQueriesPageView = (props: TProps) => {
  const {
    hasPageLoader,
    hasFallback,
    hasFeed,
    hasFeedLoader,
    hasLoadMoreButton,
    loadMoreButtonText,
    fallbackText,
    queriesList,
    onDeleteQuery,
    onLoadMore
  } = props;

  const queriesListNode = React.useMemo(() => {
    return queriesList.map(query => (
      <SearchQueryItem key={query.text} item={query} onDelete={onDeleteQuery} />
    ));
  }, [onDeleteQuery, queriesList]);

  return (
    <Page hasLoader={hasPageLoader}>
      {hasFallback && <SearchQueriesPageFallback text={fallbackText} />}
      {hasFeed && (
        <SearchQueriesPageFeed>{queriesListNode}</SearchQueriesPageFeed>
      )}
      {hasLoadMoreButton && (
        <LoadMoreButton
          buttonTestId={testId.SEARCH_QUERIES_PAGE__LOAD_MORE_BUTTON}
          loaderTestId={testId.SEARCH_QUERIES_PAGE__LOADER}
          text={loadMoreButtonText}
          hasLoader={hasFeedLoader}
          disabled={hasFeedLoader}
          onClick={onLoadMore}
        />
      )}
    </Page>
  );
};
