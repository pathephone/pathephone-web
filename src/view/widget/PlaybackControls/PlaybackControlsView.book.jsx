// @flow strict

import React from "react";

import { ThemeProvider } from "view/root/ThemeProvider/index";

import { PlaybackControlsView } from "./PlaybackControlsView";

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
