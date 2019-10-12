// @flow strict

import type { TPlaylistTrack } from "type/state";

import { SERVICE_MOCK_DELAY } from "util/constant";
import { setAsyncTimeout } from "util/setAsyncTimeout";

import { albumModel } from "./model/albumModel";
import { normalizeMockStorageTrack } from "./normalize/mockStorageTrack";

export const getPlaylistTracksByAlbumId = async (
  id: string
): Promise<TPlaylistTrack[]> => {
  await setAsyncTimeout(SERVICE_MOCK_DELAY);
  const targetAlbum = albumModel.getAlbumById(id);
  return targetAlbum.tracklist.map(normalizeMockStorageTrack.toPlaylistTrack);
};
