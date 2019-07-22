// @flow strict

type TSubmit = {|
  type: "SEARCH_CONTROLS__SUBMIT",
  payload: string
|};

type TCancel = {|
  type: "SEARCH_CONTROLS__CANCEL"
|};

export type TSearchControlsEvent = TCancel | TSubmit;
