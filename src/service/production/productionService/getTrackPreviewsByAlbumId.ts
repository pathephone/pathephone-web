import { TrackPreview } from "type/model";

import { albumModel } from "./model/albumModel";
import { normalizeMockStorageTrack } from "./normalize/mockStorageTrack";

export const getTrackPreviewsByAlbumIds = async (
  ids: string[]
): Promise<TrackPreview[]> => {
  return ids.reduce<TrackPreview[]>((acc, id) => {
    const targetAlbum = albumModel.getAlbumById(id);

    const albumTrackPreviews = targetAlbum.tracklist.map(
      normalizeMockStorageTrack.toPlaylistTrack
    );

    return [...acc, ...albumTrackPreviews];
  }, []);
};
