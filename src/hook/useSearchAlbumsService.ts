import React from "react";

import { useAsync } from "hook/useAsync";
import { useServices } from "hook/useServices";
import { useDispatch } from "hook/useDispatch";
import { TFeedAlbum } from "type/state";

export const useSearchAlbumsService = () => {
  // Import service to get albums by query.
  const { getAlbumsByQuery: searchAlbumsService } = useServices();

  // Create service promise state.
  const [servicePromiseState, injectServicePromise] = useAsync<TFeedAlbum[]>({
    errorsToKeep: [Error]
  });

  // Import dispatch function.
  const dispatch = useDispatch();

  // Create effect that handles service results.
  React.useEffect(() => {
    if (servicePromiseState) {
      const { pending, value, error } = servicePromiseState;

      if (pending) {
        dispatch({
          type: "GET_ALBUMS_BY_QUERY_SERVICE__PENDING"
        });
      }

      if (value) {
        dispatch({
          type: "GET_ALBUMS_BY_QUERY_SERVICE__RESOLVED",
          payload: value
        });
      }

      if (error) {
        dispatch({
          type: "GET_ALBUMS_BY_QUERY_SERVICE__REJECTED",
          payload: error
        });
      }
    }
  }, [dispatch, servicePromiseState]);

  // Create callback to perform service call.
  return React.useCallback(
    (query: string) => injectServicePromise(searchAlbumsService(query)),
    [injectServicePromise, searchAlbumsService]
  );
};
