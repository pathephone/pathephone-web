// @flow strict

import type { TFeedAlbum } from "types/state";

import * as React from "react";

import { useAsync } from "hooks/useAsync";
import { useServices } from "hooks/useServices";

import { useCounter } from "hooks/useCounter";

export const useGetLatestAlbums = () => {
  // State that stores queries list
  const [list, setList] = React.useState<null | TFeedAlbum[]>(null);

  // State that store actual page number
  const { value: page, increment: incrementPage } = useCounter(1);

  // Creates async state that fetches search queries
  const { getLatestAlbums: getLatestAlbumsService } = useServices();

  const [listLoadingState, loadList] = useAsync(getLatestAlbumsService);

  // Callback that reloads all pages
  const reload = React.useCallback(() => {
    setList(null);
    loadList({ startPage: 1, pagesCount: page });
  }, [loadList, page]);

  // Load list on initial render and once page changes
  React.useEffect(() => {
    loadList({ startPage: page });
  }, [loadList, page]);

  // Merges search queries
  React.useEffect(() => {
    if (listLoadingState && listLoadingState.value) {
      const { items } = listLoadingState.value;
      setList(prevValue => {
        if (prevValue) {
          return [...prevValue, ...items];
        }
        return items;
      });
    }
  }, [listLoadingState]);

  // State normalization
  const pending = !listLoadingState || listLoadingState.pending;

  const loadNextPage = incrementPage;

  const lastPageFlag =
    !!listLoadingState &&
    !!listLoadingState.value &&
    listLoadingState.value.lastPageFlag;

  return { pending, list, loadNextPage, reload, lastPageFlag };
};
