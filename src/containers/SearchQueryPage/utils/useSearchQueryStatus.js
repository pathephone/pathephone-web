// @flow strict

import React from "react";

import { useServices } from "hooks/useServices";
import { useAsync } from "hooks/useAsync";
import { useRouter } from "hooks/useRouter";
import { routes } from "data/routes";

export const useSearchQueryStatus = (query: string) => {
  const {
    getSearchInfo: getSearchInfoService,
    deleteSearch: deleteSearchService,
    saveSearch: saveSearchService
  } = useServices();

  // Pending status state
  const [pending, setPending] = React.useState(true);

  // Get status service state
  const [getSearchInfoState, getSearchInfoByQuery] = useAsync(
    getSearchInfoService
  );

  const getSearchInfo = React.useCallback(() => {
    getSearchInfoByQuery(query);
  }, [getSearchInfoByQuery, query]);

  // Save status service state
  const [saveSearchState, saveSearch] = useAsync(saveSearchService);

  // Delete status service state
  const [deleteSearchState, deleteSearch] = useAsync(deleteSearchService);

  // Initial status retrival
  React.useEffect(() => {
    getSearchInfo();
  }, [getSearchInfo]);

  // Status retrival on save / delete resolve
  React.useEffect(() => {
    if (saveSearchState && saveSearchState.resolved) {
      getSearchInfo();
    }
  }, [saveSearchState, deleteSearchState, getSearchInfo]);

  // Turn on pending status on save / delete
  // services requested
  React.useEffect(() => {
    if (
      (deleteSearchState && deleteSearchState.pending) ||
      (saveSearchState && saveSearchState.pending)
    ) {
      setPending(true);
    }
  }, [deleteSearchState, saveSearchState]);

  // Redirect to search queries list once delete search succeeded
  const { history } = useRouter();

  React.useEffect(() => {
    if (deleteSearchState && deleteSearchState.resolved) {
      history.push(routes.searchQueriesRoute());
    }
  }, [history, deleteSearchState]);

  // Turn off pending status on search info recieved
  React.useEffect(() => {
    if (getSearchInfoState && getSearchInfoState.resolved) {
      setPending(false);
    }
  }, [getSearchInfoState]);

  // State normalization

  const saved = React.useMemo(() => {
    if (getSearchInfoState && getSearchInfoState.value) {
      return getSearchInfoState.value.saved;
    }
    return false;
  }, [getSearchInfoState]);

  const toggleStatus = React.useCallback(() => {
    if (saved) {
      deleteSearch(query);
    } else {
      saveSearch(query);
    }
  }, [saved, query, deleteSearch, saveSearch]);

  return {
    saved,
    pending,
    toggleStatus
  };
};
