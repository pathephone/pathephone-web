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
  const actualPageRef = React.useRef<null | number>(null);

  const { getAlbumPreviewsFeed: getAlbumPreviewsFeedService } = useService();

  const [promiseState, injectPromise] = useAsync<TValue>();

  const dispatch = useDispatch();

  React.useEffect(() => {
    const { current: actualPage } = actualPageRef;

    if (promiseState && promiseState.pending && actualPage !== null) {
      dispatch({
        type: "GET_ALBUM_PREVIEWS_FEED",
        status: "PENDING",
        meta: actualPage
      });
    }
  }, [dispatch, promiseState]);

  React.useEffect(() => {
    const { current: actualPage } = actualPageRef;

    if (promiseState && promiseState.value && actualPage !== null) {
      const { items: albums, lastPageFlag } = promiseState.value;

      dispatch({
        type: "GET_ALBUM_PREVIEWS_FEED",
        status: "RESOLVED",
        payload: {
          items: albums,
          lastPageFlag
        },
        meta: actualPage
      });

      actualPageRef.current = null;
    }
  }, [dispatch, promiseState]);

  React.useEffect(() => {
    const { current: actualPage } = actualPageRef;

    if (promiseState && promiseState.error && actualPage !== null) {
      dispatch({
        type: "GET_ALBUM_PREVIEWS_FEED",
        status: "REJECTED",
        payload: promiseState.error,
        meta: actualPage
      });

      actualPageRef.current = null;
    }
  }, [dispatch, promiseState]);

  return React.useCallback(
    (nextPage: number) => {
      actualPageRef.current = nextPage;
      injectPromise(getAlbumPreviewsFeedService({ startPage: nextPage }));
    },
    [getAlbumPreviewsFeedService, injectPromise]
  );
};
