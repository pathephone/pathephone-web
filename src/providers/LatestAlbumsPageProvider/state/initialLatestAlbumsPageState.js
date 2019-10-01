// @flow strict

import type { TLatestAlbumsPageState } from "types/state";

export const initialLatestAlbumsState: TLatestAlbumsPageState = {
  latestPage: 1,
  loading: false,
  albums: [],
  noMoreAlbums: false
};
