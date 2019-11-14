type Play = {
  type: "PLAYBACK_CONTROLS__PLAY";
};

type Pause = {
  type: "PLAYBACK_CONTROLS__PAUSE";
};

type OpenPlaylist = {
  type: "PLAYBACK_CONTROLS__OPEN_PLAYLIST";
};

export type PlaybackControlsEvent = Play | Pause | OpenPlaylist;
