import React from "react";

import { ShareAlbumPageProvider } from "provider/ShareAlbumPageProvider";

import { ShareAlbumPageContainer } from "./ShareAlbumPageContainer";

export const ShareAlbumPage = () => {
  return (
    <ShareAlbumPageProvider>
      <ShareAlbumPageContainer />
    </ShareAlbumPageProvider>
  );
};
