// @flow strict

import type { TFeedAlbum } from "types/uiDataTypes";

import { asyncTimeout } from "utils/asyncTimeout";
import { feedAlbumMock } from "mocks/uiDataMocks";

export const getLatestAlbums = async (): Promise<TFeedAlbum[]> => {
  await asyncTimeout(500)
  return [ feedAlbumMock ]
}