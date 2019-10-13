type TTracksRecieved = {
  type: "ALBUM_AUDIO_EDITOR__TRACKS_RECIEVED";
  payload: File[];
};

export type TAlbumAudioEditorEvent = TTracksRecieved;
