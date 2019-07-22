// @flow strict

type TTitleChange = {
  type: "ALBUM_EDITOR__TITLE_CHANGE",
  payload: string
};

type TSubmit = {
  type: "ALBUM_EDITOR__SUBMIT"
};

type TCancel = {
  type: "ALBUM_EDITOR__CANCEL"
};

export type TAlbumEditorEvent = TTitleChange | TSubmit | TCancel;
