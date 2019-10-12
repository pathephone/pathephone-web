// @flow strict

import type { TFeedAlbum } from "type/state";

type TPending = {|
  type: "GET_ALBUMS_BY_QUERY_SERVICE__PENDING"
|};

type TResolved = {|
  type: "GET_ALBUMS_BY_QUERY_SERVICE__RESOLVED",
  payload: TFeedAlbum[]
|};

type TRejected = {|
  type: "GET_ALBUMS_BY_QUERY_SERVICE__REJECTED",
  payload: Error
|};

export type TGetAlbumsByQueryServiceEvent = TPending | TResolved | TRejected;
