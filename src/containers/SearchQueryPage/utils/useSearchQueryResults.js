// @flow strict

import type { TFeedAlbum } from "types/state";

import React from "react";

import { useAsync } from "hooks/useAsync";
import { useServices } from "hooks/useServices";

const SEARCH_RESULTS_UPDATE_INTERVAL = 5000;

export const useSearchQueryResults = (query: string) => {
  // State for visible results
  const [visibleResults, setVisibleResults] = React.useState<TFeedAlbum[]>([]);

  // State for new results
  const [newResults, setNewResults] = React.useState<TFeedAlbum[]>([]);

  // Reset states once query changes
  React.useEffect(() => {
    setVisibleResults([]);
    setNewResults([]);
  }, [query]);

  // Creates service state
  const { getSearchResults: getSearchResultsService } = useServices();

  const getResultsByQueryService = React.useCallback(
    () => getSearchResultsService(query),
    [query, getSearchResultsService]
  );

  const [resultsState, getResults] = useAsync(getResultsByQueryService);

  // Creates effect that handles fetched results
  React.useEffect(() => {
    if (resultsState && resultsState.value) {
      const { value } = resultsState;
      if (visibleResults.length === 0) {
        setVisibleResults(value);
      } else {
        // TODO: find the best way to prevent unnecessary filtering
        // after visibleResults state get updated
        const newResults = value.filter(
          ({ id }) => !visibleResults.some(result => result.id === id)
        );
        if (newResults.length > 0) {
          setNewResults(newResults);
        }
      }
    }
  }, [resultsState, visibleResults]);

  // Creates interval that periodically fetches results
  React.useEffect(() => {
    const intervalId = window.setInterval(
      getResults,
      SEARCH_RESULTS_UPDATE_INTERVAL
    );
    return () => {
      window.clearInterval(intervalId);
    };
  }, [getResults]);

  // Fetch initial results
  React.useEffect(() => {
    getResults();
  }, [getResults]);

  // Creates callback that merges new results into visible results
  const mergeResults = React.useCallback(() => {
    if (newResults.length > 0) {
      setVisibleResults(prevResults => [...newResults, ...prevResults]);
      setNewResults([]);
    }
  }, [newResults]);

  // State normalization
  const results = visibleResults;

  const hasNewResults = newResults.length > 0;

  return {
    results,
    hasNewResults,
    mergeResults
  };
};
