// @flow strict

import type { TSearchInfo } from "types/state";

import React from "react";

import { useAsync } from "hooks/useAsync";
import { useServices } from "hooks/useServices";
import { useCounter } from "hooks/useCounter";

export const useSearchQuieries = () => {
  // State that stores queries list
  const [list, setList] = React.useState<null | TSearchInfo[]>(null);

  // State that store actual page number
  const { value: page, increment: incrementPage } = useCounter(1);

  // Creates async state that fetches search queries
  const { getSearchQueries: getSearchQueriesService } = useServices();

  const [queriesPromiseState, injectQueriesPromise] = useAsync();

  // Callback that reloads all pages
  const reload = React.useCallback(() => {
    setList(null);
    injectQueriesPromise(
      getSearchQueriesService({ startPage: 1, pagesCount: page })
    );
  }, [getSearchQueriesService, injectQueriesPromise, page]);

  // Load list on initial render and once page changes
  React.useEffect(() => {
    injectQueriesPromise(getSearchQueriesService({ startPage: page }));
  }, [getSearchQueriesService, injectQueriesPromise, page]);

  // Merges search queries
  React.useEffect(() => {
    if (queriesPromiseState && queriesPromiseState.value) {
      const { items } = queriesPromiseState.value;
      setList(prevValue => {
        if (prevValue) {
          return [...prevValue, ...items];
        }
        return items;
      });
    }
  }, [queriesPromiseState]);

  // State normalization
  const pending = !queriesPromiseState || queriesPromiseState.pending;

  const loadNextPage = incrementPage;

  const lastPageFlag =
    !!queriesPromiseState &&
    !!queriesPromiseState.value &&
    queriesPromiseState.value.lastPageFlag;

  return { pending, list, loadNextPage, reload, lastPageFlag };
};
