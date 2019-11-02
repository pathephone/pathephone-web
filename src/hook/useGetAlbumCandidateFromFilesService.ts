import React from "react";

import { useService } from "hook/useService";
import { useAsync } from "hook/useAsync";
import { MissingAudioFilesError } from "util/error";
import { useDispatch } from "hook/useDispatch";
import { AlbumCandidate } from "type/model";

export const useGetAlbumCandidateFromFilesService = () => {
  const { getAlbumCandidateFromFiles } = useService();

  const [processPromiseState, injectProcessPromise] = useAsync<AlbumCandidate>({
    errorsToKeep: [MissingAudioFilesError]
  });

  const dispatch = useDispatch();

  React.useLayoutEffect(() => {
    if (processPromiseState) {
      const { pending, value, error } = processPromiseState;

      if (pending) {
        dispatch({
          type: "GET_ALBUM_CANDIDATE_FROM_FILES",
          status: "PENDING"
        });
      }

      if (value) {
        dispatch({
          type: "GET_ALBUM_CANDIDATE_FROM_FILES",
          status: "RESOLVED",
          payload: value
        });
      }

      if (error) {
        dispatch({
          type: "GET_ALBUM_CANDIDATE_FROM_FILES",
          status: "REJECTED",
          payload: error
        });
      }
    }
  }, [dispatch, processPromiseState]);

  const processFiles = React.useCallback(
    (files: File[]) => {
      injectProcessPromise(getAlbumCandidateFromFiles(files));
    },
    [injectProcessPromise, getAlbumCandidateFromFiles]
  );

  return processFiles;
};
