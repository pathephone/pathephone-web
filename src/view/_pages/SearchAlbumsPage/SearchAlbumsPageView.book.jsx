// @flow strict

import React from "react";

import { SearchAlbumsPageView } from "./SearchAlbumsPageView";
import { getFeedAlbumMocks } from "utils/mock/getFeedAlbumMock";
import { ThemeProvider } from "view/Root/nested/ThemeProvider/index";
import { MultiSizeScreen } from "utils/MultiSizeScreen";

export default { title: "SearchAlbumsPageView" };

const props = {
  titleText: "title",
  subTitleText: "sub title",
  fallbackSubTitleText: "fallback subtitle",
  fallbackButtonText: "fallback button",
  newResultsButtonText: "show new results",
  feedItems: getFeedAlbumMocks(1),
  onNewResultsButtonClick: () => {},
  onFallbackButtonClick: () => {}
};

export const loadingScreen = () => (
  <MultiSizeScreen>
    <ThemeProvider>
      <SearchAlbumsPageView {...props} screen="LOADING" />
    </ThemeProvider>
  </MultiSizeScreen>
);

export const hasResultsScreen = () => (
  <MultiSizeScreen>
    <ThemeProvider>
      <SearchAlbumsPageView {...props} screen="HAS_RESULTS" />
    </ThemeProvider>
  </MultiSizeScreen>
);

export const hasNewResultsScreen = () => (
  <MultiSizeScreen>
    <ThemeProvider>
      <SearchAlbumsPageView {...props} screen="HAS_NEW_RESULTS" />
    </ThemeProvider>
  </MultiSizeScreen>
);

export const fallbackScreen = () => (
  <MultiSizeScreen>
    <ThemeProvider>
      <SearchAlbumsPageView {...props} screen="FALLBACK" />
    </ThemeProvider>
  </MultiSizeScreen>
);
