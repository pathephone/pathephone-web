import { AlbumPreview } from "type/model";

type TPending = {
  type: "GET_ALBUM_PREVIEWS_BY_QUERY__PENDING";
};

type TResolved = {
  type: "GET_ALBUM_PREVIEWS_BY_QUERY__RESOLVED";
  payload: AlbumPreview[];
};

type TRejected = {
  type: "GET_ALBUM_PREVIEWS_BY_QUERY__REJECTED";
  payload: Error;
};

export type GetAlbumPreviewsByQueryEvent = TPending | TResolved | TRejected;
