type FileRecieved = {
  type: "ALBUM_COVER_EDITOR__FILE_RECIEVED";
  payload: File;
};

export type AlbumCoverEditorEvent = FileRecieved;
