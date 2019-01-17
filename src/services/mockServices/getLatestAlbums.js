// @flow strict

import type { TFeedAlbum } from "types/uiDataTypes";

import { asyncTimeout } from "utils/asyncTimeout";

import { albumsStorage } from "./utils/albumsStorage";
import { memoryAlbumToFeed } from "./utils/memoryAlbumToFeed";

export const getLatestAlbums = async (): Promise<TFeedAlbum[]> => {
  await asyncTimeout(500)
  return albumsStorage.map(memoryAlbumToFeed)
}