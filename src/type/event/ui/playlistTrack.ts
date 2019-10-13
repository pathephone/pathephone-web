type TPlay = {
  type: "PLAYLIST_TRACK__PLAY";
  payload: string;
};

type TRemove = {
  type: "PLAYLIST_TRACK__REMOVE";
  payload: string;
};

export type TPlaylistTrackEvent = TPlay | TRemove;
