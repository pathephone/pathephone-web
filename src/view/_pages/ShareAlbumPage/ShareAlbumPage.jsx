// @flow strict

import React from "react";

import { ShareAlbumPageStateProvider } from "providers/ShareAlbumPageStateProvider";
import { ShareAlbumPageEffectsProvider } from "providers/ShareAlbumPageEffectsProvider/index";

import { ShareAlbumPageView } from "./ShareAlbumPageView";

export const ShareAlbumPage = () => {
  return (
    <ShareAlbumPageStateProvider>
      <ShareAlbumPageEffectsProvider>
        <ShareAlbumPageView />
      </ShareAlbumPageEffectsProvider>
    </ShareAlbumPageStateProvider>
  );
};
