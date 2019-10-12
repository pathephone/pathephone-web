// @flow strict

import type { TFeedAlbum } from "type/state";

export type TLatestAlbumsPageState = {|
  latestPage: number,
  loading: boolean,
  albums: TFeedAlbum[],
  noMoreAlbums: boolean
|};
