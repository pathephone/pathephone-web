// @flow strict

import { ShareAlbumPageContext } from "contexts/ShareAlbumPageContext";
import { useContextStrict } from "hooks/useContextStrict";

export const useShareAlbumPageState = () => {
  return useContextStrict(ShareAlbumPageContext);
};
