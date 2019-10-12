// @flow strict

import type { TFeedAlbum } from "type/state";

export type TSearchAlbumsPageState = {|
  failed: boolean,
  albums: TFeedAlbum[],
  newAlbums: TFeedAlbum[]
|};

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
