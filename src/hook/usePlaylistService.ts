import React from "react";
import { usePromise } from "@draftup/react-use-promise";

import { useService } from "hook/useService";
import { useDispatch } from "hook/useDispatch";
import { TrackPreview } from "type/model";
import { usePlayerState } from "hook/usePlayerState";

export const usePlaylistService = () => {
  const dispatch = useDispatch();

  const { getTrackPreviewsByAlbumIds } = useService();

  const { wantedTracksAlbumIds } = usePlayerState();

  const [promiseState, injectPromise] = usePromise<TrackPreview[]>();

  React.useEffect(() => {
    if (wantedTracksAlbumIds.length > 0) {
      injectPromise(getTrackPreviewsByAlbumIds(wantedTracksAlbumIds));
    }
  }, [getTrackPreviewsByAlbumIds, injectPromise, wantedTracksAlbumIds]);

  React.useEffect(() => {
    if (promiseState) {
      if (promiseState.pending) {
        dispatch({
          type: "GET_TRACK_PREVIEWS_BY_ALBUM_IDS",
          status: "PENDING"
        });
      }

      if (promiseState.value) {
        dispatch({
          type: "GET_TRACK_PREVIEWS_BY_ALBUM_IDS",
          status: "RESOLVED",
          payload: promiseState.value
        });
      }

      if (promiseState.error) {
        dispatch({
          type: "GET_TRACK_PREVIEWS_BY_ALBUM_IDS",
          status: "REJECTED",
          payload: promiseState.error
        });
      }
    }
  }, [dispatch, promiseState]);
};
