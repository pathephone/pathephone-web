import React from "react";

import { useService } from "hook/useService";
import { useAsync } from "hook/useAsync";
import { useDispatch } from "hook/useDispatch";
import { AlbumCandidate } from "type/model";

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
          type: "SUBMIT_ALBUM_CANDIDATE__PENDING"
        });
      }
      if (resolved) {
        dispatch({
          type: "SUBMIT_ALBUM_CANDIDATE__RESOLVED"
        });
      }
      if (error) {
        dispatch({
          type: "SUBMIT_ALBUM_CANDIDATE__REJECTED",
          payload: error
        });
      }
    }
  }, [dispatch, submitPromiseState]);

  const { submitAlbumCandidate: submitAlbumCandidateService } = useService();

  const submitAlbumCandidate = React.useCallback(
    (albumData: AlbumCandidate) => {
      if (albumData) {
        injectSubmitPromise(submitAlbumCandidateService(albumData));
      }
    },
    [injectSubmitPromise, submitAlbumCandidateService]
  );

  return submitAlbumCandidate;
};
