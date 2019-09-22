// @flow strict

import type { TPlaylistTrack } from "types/state";

import { asyncTimeout } from "utils/asyncTimeout";
import { SERVICE_MOCK_DELAY } from "data/constants";

import { albumModel } from "./model/albumModel";
import { normalizeMockStorageTrack } from "./normalize/mockStorageTrack";

export const getPlaylistTracksByAlbumId = async (
  id: string
): Promise<TPlaylistTrack[]> => {
  await asyncTimeout(SERVICE_MOCK_DELAY);
  const targetAlbum = albumModel.getAlbumById(id);
  return targetAlbum.tracklist.map(normalizeMockStorageTrack.toPlaylistTrack);
};
