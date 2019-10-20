import { TrackPreview } from "type/model";

import { albumModel } from "./model/albumModel";
import { normalizeMockStorageTrack } from "./normalize/mockStorageTrack";

export const getTrackCandidatesByAlbumId = async (
  id: string
): Promise<TrackPreview[]> => {
  const targetAlbum = albumModel.getAlbumById(id);
  return targetAlbum.tracklist.map(normalizeMockStorageTrack.toPlaylistTrack);
};
