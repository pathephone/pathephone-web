// @flow strict

import type { TFeedAlbum } from "types/uiDataTypes";

import { asyncTimeout } from "utils/asyncTimeout";
import { albumsStorage } from "./utils/albumsStorage";

export const getAlbumsByMatcher = async (matcher: string): Promise<TFeedAlbum[]> => {
  await asyncTimeout(500)
  return []
}