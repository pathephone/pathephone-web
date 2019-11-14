type Submit = {
  type: "SEARCH_CONTROLS__SUBMIT";
  payload: string;
};

type Cancel = {
  type: "SEARCH_CONTROLS__CANCEL";
};

export type SearchControlsEvent = Cancel | Submit;
