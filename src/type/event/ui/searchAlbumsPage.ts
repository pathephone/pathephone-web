type NewQuery = {
  type: "SEARCH_ALBUMS_PAGE__NEW_QUERY";
  payload: string;
};

type Retry = {
  type: "SEARCH_ALBUMS_PAGE__RETRY";
};

type ShowNewResults = {
  type: "SEARCH_ALBUMS_PAGE__SHOW_NEW_RESULTS";
};

export type SearchAlbumsPageEvent = NewQuery | Retry | ShowNewResults;
