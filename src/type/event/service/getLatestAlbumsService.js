// @flow strict

import type { TFeedAlbum } from "type/state";

type TPending = {|
  type: "GET_LATEST_ALBUMS_SERVICE__PENDING"
|};

type TResolved = {|
  type: "GET_LATEST_ALBUMS_SERVICE__RESOLVED",
  payload: {|
    albums: TFeedAlbum[],
    lastPageFlag: boolean
  |}
|};

type TRejected = {|
  type: "GET_LATEST_ALBUMS_SERVICE__REJECTED",
  payload: Error
|};

export type TGetLatestAlbumsServiceEvent = TPending | TResolved | TRejected;
