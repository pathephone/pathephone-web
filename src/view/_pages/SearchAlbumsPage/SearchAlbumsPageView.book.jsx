// @flow strict

import React from "react";

import { SearchAlbumsPageView } from "./SearchAlbumsPageView";
import { getFeedAlbumMocks } from "utils/mock/getFeedAlbumMock";

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
  <SearchAlbumsPageView {...props} screen="LOADING" />
);

export const hasResultsScreen = () => (
  <SearchAlbumsPageView {...props} screen="HAS_RESULTS" />
);

export const hasNewResultsScreen = () => (
  <SearchAlbumsPageView {...props} screen="HAS_NEW_RESULTS" />
);

export const fallbackScreen = () => (
  <SearchAlbumsPageView {...props} screen="FALLBACK" />
);
