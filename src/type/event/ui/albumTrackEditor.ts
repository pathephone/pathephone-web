type MoveUp = {
  type: "ALBUM_TRACK_EDITOR__MOVE_UP";
  payload: string;
};

type MoveDown = {
  type: "ALBUM_TRACK_EDITOR__MOVE_DOWN";
  payload: string;
};

type Remove = {
  type: "ALBUM_TRACK_EDITOR__REMOVE";
  payload: string;
};

type TitleChange = {
  type: "ALBUM_TRACK_EDITOR__TITLE_CHANGE";
  payload: {
    trackId: string;
    value: string;
  };
};

type ArtistsChange = {
  type: "ALBUM_TRACK_EDITOR__ARTIST_CHANGE";
  payload: {
    trackId: string;
    artistId: string;
    value: string;
  };
};

export type AlbumTrackEditorEvent =
  | MoveUp
  | MoveDown
  | Remove
  | TitleChange
  | ArtistsChange;
