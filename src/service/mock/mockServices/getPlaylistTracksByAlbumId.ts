import { SERVICE_MOCK_DELAY } from "util/constant";
import { setAsyncTimeout } from "util/setAsyncTimeout";
import { TrackPreview } from "type/model";

import { albumModel } from "./model/albumModel";
import { normalizeMockStorageTrack } from "./normalize/mockStorageTrack";

export const getPlaylistTracksByAlbumId = async (
  id: string
): Promise<TrackPreview[]> => {
  await setAsyncTimeout(SERVICE_MOCK_DELAY);
  const targetAlbum = albumModel.getAlbumById(id);
  return targetAlbum.tracklist.map(normalizeMockStorageTrack.toPlaylistTrack);
};
