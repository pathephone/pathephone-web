import { TMockStorageTrack } from "service/mock/type";
import { getUniqueString } from "util/getUniqueString";
import { TrackPreview } from "type/model";

export const normalizeMockStorageTrack = {
  toPlaylistTrack({
    title,
    artists,
    audioSrc
  }: TMockStorageTrack): TrackPreview {
    return {
      id: getUniqueString(),
      title,
      artistName: artists.join(", "),
      audioSrc
    };
  }
};
