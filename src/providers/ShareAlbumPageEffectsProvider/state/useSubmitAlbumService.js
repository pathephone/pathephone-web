// @flow strict

import type { TAlbumFormData } from "types/state";

import React from "react";

import { useServices } from "hooks/useServices";
import { useAsync } from "hooks/useAsync";
import { useDispatch } from "hooks/useDispatch";

export const useSubmitAlbumService = () => {
  // Submit service state and method to call.
  const [submitPromiseState, injectSubmitPromise] = useAsync();

  const dispatch = useDispatch();

  // Effect handles submit service state.
  React.useLayoutEffect(() => {
    if (submitPromiseState) {
      const { pending, resolved, error } = submitPromiseState;

      if (pending) {
        dispatch({
          type: "SUBMIT_ALBUM_SERVICE__PENDING"
        });
      }
      if (resolved) {
        dispatch({
          type: "SUBMIT_ALBUM_SERVICE__RESOLVED"
        });
      }
      if (error) {
        dispatch({
          type: "SUBMIT_ALBUM_SERVICE__REJECTED",
          payload: error
        });
      }
    }
  }, [dispatch, submitPromiseState]);

  const { submitAlbum: submitAlbumService } = useServices();

  const submitAlbum = React.useCallback(
    (albumData: TAlbumFormData) => {
      if (albumData) {
        injectSubmitPromise(submitAlbumService(albumData));
      }
    },
    [injectSubmitPromise, submitAlbumService]
  );

  return submitAlbum;
};
