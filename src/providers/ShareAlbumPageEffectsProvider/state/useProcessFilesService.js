// @flow strict

import React from "react";

import { useServices } from "hooks/useServices";
import { useAsync } from "hooks/useAsync";
import { MissingAudioFilesError } from "data/errors";
import { useDispatch } from "hooks/useDispatch";

export const useProcessFilesService = () => {
  const { getAlbumFormDataFromFiles: processFilesService } = useServices();

  const [processPromiseState, injectProcessPromise] = useAsync({
    errorsToKeep: [MissingAudioFilesError]
  });

  const dispatch = useDispatch();

  React.useLayoutEffect(() => {
    if (processPromiseState) {
      const { pending, value, error } = processPromiseState;

      if (pending) {
        dispatch({
          type: "PROCESS_FILES_SERVICE__PENDING"
        });
      }

      if (value) {
        dispatch({
          type: "PROCESS_FILES_SERVICE__RESOLVED",
          payload: value
        });
      }

      if (error) {
        dispatch({
          type: "PROCESS_FILES_SERVICE__REJECTED",
          payload: error
        });
      }
    }
  }, [dispatch, processPromiseState]);

  const processFiles = React.useCallback(
    (files: FileList) => {
      injectProcessPromise(processFilesService(files));
    },
    [injectProcessPromise, processFilesService]
  );

  return processFiles;
};
