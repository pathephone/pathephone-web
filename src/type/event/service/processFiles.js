// @flow strict

import type { TAlbumFormData } from "type/state";

type TPending = {|
  type: "PROCESS_FILES_SERVICE__PENDING"
|};

type TResolved = {|
  type: "PROCESS_FILES_SERVICE__RESOLVED",
  payload: TAlbumFormData
|};

type TRejected = {|
  type: "PROCESS_FILES_SERVICE__REJECTED",
  payload: Error
|};

export type TProcessFilesServiceEvent = TPending | TResolved | TRejected;
