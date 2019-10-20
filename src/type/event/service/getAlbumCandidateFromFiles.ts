import { AlbumCandidate } from "type/model";

type TPending = {
  type: "GET_ALBUM_CANDIDATE_FROM_FILES__PENDING";
};

type TResolved = {
  type: "GET_ALBUM_CANDIDATE_FROM_FILES__RESOLVED";
  payload: AlbumCandidate;
};

type TRejected = {
  type: "GET_ALBUM_CANDIDATE_FROM_FILES__REJECTED";
  payload: Error;
};

export type GetAlbumCandidateFromFilesEvent = TPending | TResolved | TRejected;
