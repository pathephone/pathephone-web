import React from "react";

import { useService } from "hook/useService";
import { useAsync } from "hook/useAsync";
import { MissingAudioFilesError } from "util/error";
import { useDispatch } from "hook/useDispatch";
import { TAlbumFormData } from "type/state";

export const useProcessFilesService = () => {
  const { getAlbumFormDataFromFiles: processFilesService } = useService();

  const [processPromiseState, injectProcessPromise] = useAsync<TAlbumFormData>({
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
    (files: File[]) => {
      injectProcessPromise(processFilesService(files));
    },
    [injectProcessPromise, processFilesService]
  );

  return processFiles;
};
