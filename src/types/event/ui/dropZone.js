// @flow strict

type TFilesRecieved = {
  type: "DROP_ZONE__FILES_RECIEVED",
  payload: FileList
};

export type TDropZoneEvent = TFilesRecieved;
