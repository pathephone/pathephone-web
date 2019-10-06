// @flow strict

import React from "react";

import { PlaybackControlsView } from "./PlaybackControlsView";
import { ThemeProvider } from "view/Root/nested/ThemeProvider/index";

export default { title: "PlaybackControlsView" };

const props = {
  screen: "PENDING",
  title: "Song title",
  artistName: "Song artist name",
  onPlaybackButtonClick() {},
  onPlaylistButtonClick() {}
};

export const hasLoadingScreen = () => (
  <ThemeProvider>
    <PlaybackControlsView {...props} screen="PENDING" />
  </ThemeProvider>
);

export const hasPlayingScreen = () => (
  <ThemeProvider>
    <PlaybackControlsView {...props} screen="PLAYING" />
  </ThemeProvider>
);

export const hasPausedScreen = () => (
  <ThemeProvider>
    <PlaybackControlsView {...props} screen="PAUSED" />
  </ThemeProvider>
);

export const hasFailedScreen = () => (
  <ThemeProvider>
    <PlaybackControlsView {...props} screen="FAILED" />
  </ThemeProvider>
);
