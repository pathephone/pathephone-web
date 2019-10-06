// @flow strict

import React from "react";

import { PlaylistTrackView } from "./PlaylistTrackView";
import { ThemeProvider } from "view/Root/nested/ThemeProvider/index";
import { MultiSizeScreen } from "utils/MultiSizeScreen";

export default { title: "PlaylistTrackView" };

const props = {
  artistName: "Some artist",
  title: "Some title",
  onPlay() {},
  onRemove() {}
};

export const hasDefaultScreen = () => (
  <MultiSizeScreen>
    <ThemeProvider>
      <PlaylistTrackView {...props} screen="DEFAULT" />
    </ThemeProvider>
  </MultiSizeScreen>
);

export const hasPlayingScreen = () => (
  <MultiSizeScreen>
    <ThemeProvider>
      <PlaylistTrackView {...props} screen="PLAYING" />
    </ThemeProvider>
  </MultiSizeScreen>
);
