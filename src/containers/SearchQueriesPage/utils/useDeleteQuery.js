// @flow strict

import { useServices } from "hooks/useServices";
import { useAsync } from "hooks/useAsync";

export const useDeleteQuery = () => {
  // Delete status service state
  const { deleteSearch: deleteSearchService } = useServices();

  const [searchDeletingState, deleteSearch] = useAsync<string, void>(
    deleteSearchService
  );

  return [searchDeletingState, deleteSearch];
};
