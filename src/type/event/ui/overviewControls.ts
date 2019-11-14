type OpenNavigation = {
  type: "OVERVIEW_CONTROLS__OPEN_NAVIGATION";
  payload: string;
};

type OpenSearch = {
  type: "OVERVIEW_CONTROLS__OPEN_SEARCH";
};

export type OverviewControlsEvent = OpenNavigation | OpenSearch;
