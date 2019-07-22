// @flow strict

type TPending = {|
  type: "SUBMIT_ALBUM_SERVICE__PENDING"
|};

type TResolved = {|
  type: "SUBMIT_ALBUM_SERVICE__RESOLVED"
|};

type TRejected = {|
  type: "SUBMIT_ALBUM_SERVICE__REJECTED",
  payload: Error
|};

export type TSubmitAlbumServiceEvent = TPending | TResolved | TRejected;
