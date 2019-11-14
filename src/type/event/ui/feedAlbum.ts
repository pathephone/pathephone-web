type AddToPlaylist = {
  type: "FEED_ALBUM__ADD_TO_PLAYLIST";
  payload: string;
};

type Play = {
  type: "FEED_ALBUM__PLAY";
  payload: string;
};

export type AlbumPreviewEvent = AddToPlaylist | Play;
