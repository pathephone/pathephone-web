// @flow strict

type TFilesRecieved = {
  type: "DROP_ZONE__FILES_RECIEVED",
  payload: File[]
};

export type TDropZoneEvent = TFilesRecieved;
