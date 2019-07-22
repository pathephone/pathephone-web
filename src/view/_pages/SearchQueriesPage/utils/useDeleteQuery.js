// @flow strict

import React from "react";

import { useServices } from "hooks/useServices";
import { useAsync } from "hooks/useAsync";

export const useDeleteQuery = () => {
  // Delete status service state
  const { deleteSearch: deleteSearchService } = useServices();

  const [deletePromiseState, injectDeletePromise] = useAsync<void>();

  const deleteSearch = React.useCallback(
    (query: string) => {
      injectDeletePromise(deleteSearchService(query));
    },
    [deleteSearchService, injectDeletePromise]
  );

  return [deletePromiseState, deleteSearch];
};
