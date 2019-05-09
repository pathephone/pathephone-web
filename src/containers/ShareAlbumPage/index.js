// @flow strict

import { useShareAlbumPageState } from "./state/useShareAlbumPageState";
import { ShareAlbumPageView } from "./view/ShareAlbumPageView";

export const ShareAlbumPage = () => {
  const viewProps = useShareAlbumPageState();
  return ShareAlbumPageView(viewProps);
};
