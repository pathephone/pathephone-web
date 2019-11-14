type PlayNext = {
  type: "PLAYLIST_CONTROLS__PLAY_NEXT";
};

type PlayPrevious = {
  type: "PLAYLIST_CONTROLS__PLAY_PREVIOUS";
};

type Close = {
  type: "PLAYLIST_CONTROLS__CLOSE";
};

export type PlaylistControlsEvent = PlayNext | PlayPrevious | Close;
