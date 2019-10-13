type TPlayNext = {
  type: "PLAYLIST_CONTROLS__PLAY_NEXT";
};

type TPlayPrevious = {
  type: "PLAYLIST_CONTROLS__PLAY_PREVIOUS";
};

type TClose = {
  type: "PLAYLIST_CONTROLS__CLOSE";
};

export type TPlaylistControlsEvent = TPlayNext | TPlayPrevious | TClose;
