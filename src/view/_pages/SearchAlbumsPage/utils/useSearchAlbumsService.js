// @flow strict

import type { TFeedAlbum } from "types/state";

import React from "react";

import { useAsync } from "hooks/useAsync";
import { useServices } from "hooks/useServices";
import { setCustomInterval } from "utils/setCustomInterval";

type TParams = {|
  query: string,
  updateInterval: number
|};

export const useSearchAlbumsService = ({ query, updateInterval }: TParams) => {
  // State that indicates launched service
  const [failed, setFailed] = React.useState(false);

  // State for visible results
  const [visibleResults, setVisibleResults] = React.useState<TFeedAlbum[]>([]);

  // State for new results
  const [newResults, setNewResults] = React.useState<TFeedAlbum[]>([]);

  // Reset states once query changes.
  React.useEffect(() => {
    setVisibleResults([]);
    setNewResults([]);
  }, [query]);

  // Import service to get albums by query.
  const { getAlbumsByQuery: searchAlbumsService } = useServices();

  // Create promise state.
  const [searchPromiseState, injectResultsPromise] = useAsync({
    errorsToKeep: [Error]
  });

  // Create callback to perform service call.
  const searchAlbums = React.useCallback(
    () => injectResultsPromise(searchAlbumsService(query)),
    [injectResultsPromise, query, searchAlbumsService]
  );

  // Create effect that handles service results.
  React.useEffect(() => {
    if (searchPromiseState && searchPromiseState.value) {
      const { value } = searchPromiseState;

      if (visibleResults.length === 0) {
        setVisibleResults(value);
      } else {
        // TODO: find the best way to prevent unnecessary filtering
        // after visibleResults state get updated.
        const newResults = value.filter(
          ({ id }) => !visibleResults.some(result => result.id === id)
        );
        if (newResults.length > 0) {
          setNewResults(newResults);
        }
      }
    }
  }, [searchPromiseState, visibleResults]);

  // Crate effect that fill turn on failed indicator if
  // service will fail.
  React.useEffect(() => {
    if (searchPromiseState && searchPromiseState.rejected) {
      setFailed(true);
    }
  }, [searchPromiseState]);

  // Create interval that will trigger service periodically as well
  // as perform initial service call.
  // Cancele it if service fails.
  React.useEffect(() => {
    if (!failed) {
      searchAlbums();

      return setCustomInterval(searchAlbums, updateInterval);
    }
  }, [failed, searchAlbums, updateInterval]);

  // Create callback that will merge new results into visible results.
  const mergeResults = React.useCallback(() => {
    if (newResults.length > 0) {
      setVisibleResults(prevResults => [...newResults, ...prevResults]);
      setNewResults([]);
    }
  }, [newResults]);

  // Create callback that will restart service after it fails.
  const start = React.useCallback(() => {
    setFailed(false);
  }, []);

  // State normalization
  const results = visibleResults;

  const hasNewResults = newResults.length > 0;

  return {
    results,
    hasNewResults,
    failed,
    mergeResults,
    start
  };
};
