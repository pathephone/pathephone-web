type TitleChange = {
  type: "ALBUM_EDITOR__TITLE_CHANGE";
  payload: string;
};

type Submit = {
  type: "ALBUM_EDITOR__SUBMIT";
};

type Cancel = {
  type: "ALBUM_EDITOR__CANCEL";
};

export type AlbumEditorEvent = TitleChange | Submit | Cancel;
