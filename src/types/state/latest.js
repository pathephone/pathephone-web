// @flow strict

import type { TFeedAlbum } from "types/state";

export type TLatestAlbumsPageState = {|
  latestPage: number,
  loading: boolean,
  albums: TFeedAlbum[],
  noMoreAlbums: boolean
|};
