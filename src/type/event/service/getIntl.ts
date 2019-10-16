import { Intl } from "type/intl";

type TPending = {
  type: "GET_INTL_SERVICE__PENDING";
};

type TResolved = {
  type: "GET_INTL_SERVICE__RESOLVED";
  payload: Intl;
};

type TRejected = {
  type: "GET_INTL_SERVICE__REJECTED";
  payload: Error;
};

export type TGetIntlServiceEvent = TPending | TResolved | TRejected;
