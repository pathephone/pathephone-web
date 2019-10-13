type TFileRecieved = {
  type: "ALBUM_COVER_EDITOR__FILE_RECIEVED";
  payload: File;
};

export type TAlbumCoverEditorEvent = TFileRecieved;
