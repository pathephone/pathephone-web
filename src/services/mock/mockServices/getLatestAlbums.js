// @flow strict

import type { TFeedAlbum } from "types/stateTypes";

import { asyncTimeout } from "utils/asyncTimeout";

// import { albumsStorage } from "./mockStorage";
// import { mockStorageAlbumToFeedAlbum } from "./normalize/mockStorageAlbumToFeedAlbum";
import { feedAlbumMocks } from "mocks/uiDataMocks";

export const getLatestAlbums = async (): Promise<TFeedAlbum[]> => {
  await asyncTimeout(500);
  // return albumsStorage.map(mockStorageAlbumToFeedAlbum);
  return [...feedAlbumMocks];
};
