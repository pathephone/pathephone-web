// @flow strict

import type { TAlbumFormArtist } from "type/state";

type TMoveUp = {
  type: "ALBUM_TRACK_EDITOR__MOVE_UP",
  payload: string
};

type TMoveDown = {
  type: "ALBUM_TRACK_EDITOR__MOVE_DOWN",
  payload: string
};

type TRemove = {
  type: "ALBUM_TRACK_EDITOR__REMOVE",
  payload: string
};

type TTitleChange = {
  type: "ALBUM_TRACK_EDITOR__TITLE_CHANGE",
  payload: {
    trackId: string,
    value: string
  }
};

type TArtistsChange = {
  type: "ALBUM_TRACK_EDITOR__ARTIST_CHANGE",
  payload: {
    trackId: string,
    artistId: string,
    value: string
  }
};

export type TAlbumTrackEditorEvent =
  | TMoveUp
  | TMoveDown
  | TRemove
  | TTitleChange
  | TArtistsChange;
