// @flow strict

export type TSearchInfo = {|
  text: string,
  saved: boolean,
  resultsCount: number
|};

export type TSearchAlbumsPageScreen =
  | "LOADING"
  | "HAS_RESULTS"
  | "HAS_NEW_RESULTS"
  | "FALLBACK";
