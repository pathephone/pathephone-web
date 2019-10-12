// @flow strict

import { ShareAlbumPageContext } from "context/ShareAlbumPageContext";
import { useContextStrict } from "hook/useContextStrict";

export const useShareAlbumPageState = () => {
  return useContextStrict(ShareAlbumPageContext);
};
