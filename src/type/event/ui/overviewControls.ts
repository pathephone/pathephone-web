type TOpenNavigation = {
  type: "OVERVIEW_CONTROLS__OPEN_NAVIGATION";
  payload: string;
};

type TOpenSearch = {
  type: "OVERVIEW_CONTROLS__OPEN_SEARCH";
};

export type TOverviewControlsEvent = TOpenNavigation | TOpenSearch;
