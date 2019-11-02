import * as React from "react";

import { useAsync } from "hook/useAsync";
import { useService } from "hook/useService";
import { useDispatch } from "hook/useDispatch";
import { AlbumPreview } from "type/model";

type TValue = {
  items: AlbumPreview[];
  lastPageFlag: boolean;
};

export const useGetLatestAlbumsService = () => {
  const { getAlbumPreviewsFeed: getAlbumPreviewsFeedService } = useService();

  const [promiseState, injectPromise] = useAsync<TValue>();

  const dispatch = useDispatch();

  React.useEffect(() => {
    if (promiseState && promiseState.pending) {
      dispatch({
        type: "GET_ALBUM_PREVIEWS_FEED",
        status: "PENDING"
      });
    }
  }, [dispatch, promiseState]);

  React.useEffect(() => {
    if (promiseState && promiseState.value) {
      const { items: albums, lastPageFlag } = promiseState.value;

      dispatch({
        type: "GET_ALBUM_PREVIEWS_FEED",
        status: "RESOLVED",
        payload: {
          items: albums,
          lastPageFlag
        }
      });
    }
  }, [dispatch, promiseState]);

  React.useEffect(() => {
    if (promiseState && promiseState.error) {
      dispatch({
        type: "GET_ALBUM_PREVIEWS_FEED",
        status: "REJECTED",
        payload: promiseState.error
      });
    }
  }, [dispatch, promiseState]);

  return React.useCallback(
    (nextPage: number) => {
      injectPromise(getAlbumPreviewsFeedService({ startPage: nextPage }));
    },
    [getAlbumPreviewsFeedService, injectPromise]
  );
};
