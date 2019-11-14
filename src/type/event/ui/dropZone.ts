type FilesRecieved = {
  type: "DROP_ZONE__FILES_RECIEVED";
  payload: File[];
};

export type DropZoneEvent = FilesRecieved;
