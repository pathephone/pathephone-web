// @flow strict

type TPlay = {
  type: "PLAYBACK_CONTROLS__PLAY"
};

type TPause = {
  type: "PLAYBACK_CONTROLS__PAUSE"
};

type TOpenPlaylist = {
  type: "PLAYBACK_CONTROLS__OPEN_PLAYLIST"
};

export type TPlaybackControlsEvent = TPlay | TPause | TOpenPlaylist;
