import { TrackPreview } from "type/model";

type TAddToPlaylist = {
  type: "FEED_ALBUM__ADD_TO_PLAYLIST";
  payload: TrackPreview[];
};

type TPlay = {
  type: "FEED_ALBUM__PLAY";
  payload: TrackPreview[];
};

export type AlbumPreviewEvent = TAddToPlaylist | TPlay;
