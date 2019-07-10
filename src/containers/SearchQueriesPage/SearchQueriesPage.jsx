// @flow strict

import React from "react";

import { useSearchQuieries } from "./utils/useSearchQueries";

import { SearchQueriesPageView } from "./SearchQueriesPageView";
import { useDeleteQuery } from "./utils/useDeleteQuery";

export const SearchQueriesPage = () => {
  const [hasPageLoader, setHasPageLoader] = React.useState(true);

  // Inject search queries service state
  const {
    list,
    pending,
    lastPageFlag,
    loadNextPage,
    reload
  } = useSearchQuieries();

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

  // Inject delete query service state
  const [queryDeletingState, deleteQuery] = useDeleteQuery();

  // Turn on page loader once query deleting in process
  React.useEffect(() => {
    if (queryDeletingState && queryDeletingState.pending) {
      setHasPageLoader(true);
    }
  }, [queryDeletingState]);

  // Reload search queries once delete query succeeded
  // TODO: find a solution to unnecessary reload that makes sense
  React.useEffect(() => {
    if (queryDeletingState && queryDeletingState.resolved && hasPageLoader) {
      reload();
    }
  }, [hasPageLoader, queryDeletingState, reload]);

  const onLoadMore = loadNextPage;

  const onDeleteQuery = deleteQuery;

  const hasFeed = !!list && list.length > 0;

  const hasFeedLoader = !!list && list.length > 0 && pending;

  const hasFallback = !!list && list.length === 0 && !pending;

  const hasLoadMoreButton = !!list && lastPageFlag === false;

  const loadMoreButtonText = "load more";

  const fallbackText = "you have no saved queries";

  const queriesList = list || [];

  const viewProps = {
    hasFeed,
    hasFallback,
    hasFeedLoader,
    hasPageLoader,
    hasLoadMoreButton,
    loadMoreButtonText,
    fallbackText,
    queriesList,
    onLoadMore,
    onDeleteQuery
  };

  return <SearchQueriesPageView {...viewProps} />;
};
