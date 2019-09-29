// @flow strict

import React from "react";

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
  <PlaybackControlsView {...props} screen="PENDING" />
);

export const hasPlayingScreen = () => (
  <PlaybackControlsView {...props} screen="PLAYING" />
);

export const hasPausedScreen = () => (
  <PlaybackControlsView {...props} screen="PAUSED" />
);
