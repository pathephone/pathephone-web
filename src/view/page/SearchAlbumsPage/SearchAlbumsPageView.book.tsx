import React from "react";

import { MultiSizeScreen } from "util/react/MultiSizeScreen";
import { ThemeProvider } from "view/root/ThemeProvider";

import { SearchAlbumsPageView } from "./SearchAlbumsPageView";
import { getAlbumPreviewMocks } from "util/mock/albumPreviewMock";

export default { title: "SearchAlbumsPageView" };

const text = "Some text";

const longText =
  "Some long long long long long long long long long long long text";

const longTextWithoutSpaces =
  "Somelonglonglonglonglonglonglonglonglonglonglongtext";

const props = {
  titleText: text,
  subTitleText: text,
  fallbackSubTitleText: text,
  fallbackButtonText: text,
  newResultsButtonText: text,
  feedItems: getAlbumPreviewMocks(1),
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

export const fallbackScreen = () => (
  <MultiSizeScreen>
    <ThemeProvider>
      <SearchAlbumsPageView {...props} screen="FALLBACK" />
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

export const withLongText = () => (
  <MultiSizeScreen>
    <ThemeProvider>
      <SearchAlbumsPageView
        {...props}
        screen="LOADING"
        titleText={longText}
        subTitleText={longText}
      />
    </ThemeProvider>
  </MultiSizeScreen>
);

export const withLongTextWithoutSpaces = () => (
  <MultiSizeScreen>
    <ThemeProvider>
      <SearchAlbumsPageView
        {...props}
        screen="LOADING"
        titleText={longTextWithoutSpaces}
        subTitleText={longTextWithoutSpaces}
      />
    </ThemeProvider>
  </MultiSizeScreen>
);
