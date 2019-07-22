// @flow strict

type TTracksRecieved = {
  type: "ALBUM_AUDIO_EDITOR__TRACKS_RECIEVED",
  payload: FileList
};

export type TAlbumAudioEditorEvent = TTracksRecieved;
