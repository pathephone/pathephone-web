// @flow strict

import * as React from "react";

import { useAsync } from "hooks/useAsync";
import { useServices } from "hooks/useServices";
import { useDispatch } from "hooks/useDispatch";

export const useGetLatestAlbumsService = () => {
  const { getLatestAlbums: getLatestAlbumsService } = useServices();

  const [promiseState, injectPromise] = useAsync();

  const dispatch = useDispatch();

  React.useEffect(() => {
    if (promiseState && promiseState.pending) {
      dispatch({
        type: "GET_LATEST_ALBUMS_SERVICE__PENDING"
      });
    }
  }, [dispatch, promiseState]);

  React.useEffect(() => {
    if (promiseState && promiseState.value) {
      const { items: albums, lastPageFlag } = promiseState.value;

      dispatch({
        type: "GET_LATEST_ALBUMS_SERVICE__RESOLVED",
        payload: {
          albums,
          lastPageFlag
        }
      });
    }
  }, [dispatch, promiseState]);

  React.useEffect(() => {
    if (promiseState && promiseState.error) {
      dispatch({
        type: "GET_LATEST_ALBUMS_SERVICE__REJECTED",
        payload: promiseState.error
      });
    }
  }, [dispatch, promiseState]);

  return React.useCallback(
    (nextPage: number) => {
      injectPromise(getLatestAlbumsService({ startPage: nextPage }));
    },
    [getLatestAlbumsService, injectPromise]
  );
};
