import React from "react";

import { MultiSizeScreen } from "util/react/MultiSizeScreen";
import { ThemeProvider } from "view/root/ThemeProvider/index";

import { PlaylistTrackView } from "./PlaylistTrackView";

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
