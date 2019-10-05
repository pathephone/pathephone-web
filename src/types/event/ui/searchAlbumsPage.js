// @flow strict

type TNewQuery = {|
  type: "SEARCH_ALBUMS_PAGE__NEW_QUERY",
  payload: string
|};

type TRetry = {|
  type: "SEARCH_ALBUMS_PAGE__RETRY"
|};

type TShowNewResults = {|
  type: "SEARCH_ALBUMS_PAGE__SHOW_NEW_RESULTS"
|};

export type TSearchAlbumsPageEvent = TNewQuery | TRetry | TShowNewResults;
