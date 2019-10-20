import { Intl } from "type/intl";

type TPending = {
  type: "GET_INTL__PENDING";
};

type TResolved = {
  type: "GET_INTL__RESOLVED";
  payload: Intl;
};

type TRejected = {
  type: "GET_INTL__REJECTED";
  payload: Error;
};

export type GetIntlEvent = TPending | TResolved | TRejected;
