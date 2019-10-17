import { AlbumCandidate } from "type/model";

type TPending = {
  type: "PROCESS_FILES_SERVICE__PENDING";
};

type TResolved = {
  type: "PROCESS_FILES_SERVICE__RESOLVED";
  payload: AlbumCandidate;
};

type TRejected = {
  type: "PROCESS_FILES_SERVICE__REJECTED";
  payload: Error;
};

export type TProcessFilesServiceEvent = TPending | TResolved | TRejected;
