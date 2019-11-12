type TAddToPlaylist = {
  type: "FEED_ALBUM__ADD_TO_PLAYLIST";
  payload: string;
};

type TPlay = {
  type: "FEED_ALBUM__PLAY";
  payload: string;
};

export type AlbumPreviewEvent = TAddToPlaylist | TPlay;
