type Play = {
  type: "PLAYLIST_TRACK__PLAY";
  payload: string;
};

type Remove = {
  type: "PLAYLIST_TRACK__REMOVE";
  payload: string;
};

export type PlaylistTrackEvent = Play | Remove;
