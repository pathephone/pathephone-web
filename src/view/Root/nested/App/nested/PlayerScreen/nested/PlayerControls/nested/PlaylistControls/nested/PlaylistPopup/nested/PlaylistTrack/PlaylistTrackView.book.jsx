// @flow strict

import React from "react";

import { PlaylistTrackView } from "./PlaylistTrackView";
import { ThemeProvider } from "view/Root/nested/ThemeProvider/index";

export default { title: "PlaylistTrackView" };

const props = {
  artistName: "Some artist",
  title: "Some title",
  onPlay() {},
  onRemove() {}
};

export const hasDefaultScreen = () => (
  <ThemeProvider>
    <PlaylistTrackView {...props} screen="DEFAULT" />
  </ThemeProvider>
);

export const hasPlayingScreen = () => (
  <ThemeProvider>
    <PlaylistTrackView {...props} screen="PLAYING" />
  </ThemeProvider>
);
