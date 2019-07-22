// @flow strict

import type { ContextRouter } from "react-router-dom";

import React from "react";

import { useIntlDictionary } from "hooks/useIntl";

import { SearchQueryPageView } from "./SearchQueryPageView";
import { useSearchQueryStatus } from "./utils/useSearchQueryStatus";
import { useSearchQueryResults } from "./utils/useSearchQueryResults";

type TProps = ContextRouter;

export type TSearchQueryPageProps = TProps;

export const SearchQueryPage = (props: TProps) => {
  const {
    match: {
      params: { query: searchValue }
    }
  } = props;

  if (typeof searchValue !== "string") {
    throw new TypeError();
  }

  const {
    searchQueryPage: {
      fallbackText,
      saveSearchButtonText,
      deleteSearchButtonText,
      showNewResultsButtonText
    }
  } = useIntlDictionary();

  const { saved, pending: statusPending, toggleStatus } = useSearchQueryStatus(
    searchValue
  );

  const { results, hasNewResults, mergeResults } = useSearchQueryResults(
    searchValue
  );

  // State normalization

  const hasLoader = statusPending;

  const hasSaveSearchButton = !statusPending && saved === false;

  const hasDeleteSearchButton = !statusPending && saved === true;

  const hasShowNewResultsButton = hasNewResults;

  const hasFallback = results.length === 0;

  const hasFeed = results.length > 0;

  const titleText = searchValue;

  const feedItems = results;

  const onSaveSearch = toggleStatus;

  const onDeleteSearch = toggleStatus;

  const onShowNewResults = mergeResults;

  const viewProps = {
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
  };

  return <SearchQueryPageView {...viewProps} />;
};
