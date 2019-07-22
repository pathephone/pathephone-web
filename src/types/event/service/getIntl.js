// @flow strict

import type { TIntl } from "types/state";

type TPending = {|
  type: "GET_INTL_SERVICE__PENDING"
|};

type TResolved = {|
  type: "GET_INTL_SERVICE__RESOLVED",
  payload: TIntl
|};

type TRejected = {|
  type: "GET_INTL_SERVICE__REJECTED",
  payload: Error
|};

export type TGetIntlServiceEvent = TPending | TResolved | TRejected;
