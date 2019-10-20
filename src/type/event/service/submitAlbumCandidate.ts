type TPending = {
  type: "SUBMIT_ALBUM_CANDIDATE__PENDING";
};

type TResolved = {
  type: "SUBMIT_ALBUM_CANDIDATE__RESOLVED";
};

type TRejected = {
  type: "SUBMIT_ALBUM_CANDIDATE__REJECTED";
  payload: Error;
};

export type SubmitAlbumCandidateEvent = TPending | TResolved | TRejected;
