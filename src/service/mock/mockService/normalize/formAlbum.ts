import { getUniqueString } from "util/getUniqueString";
import { TMockStorageAlbum } from "service/mock/type";
import { TrackCandidate, AlbumCandidate } from "type/model";

const formTrackToServiceTrack = ({
  title,
  artists,
  audio
}: TrackCandidate) => ({
  title,
  // TODO: figure out how to avoid empty names to be submited
  artists: artists.filter(artist => !!artist.name).map(artist => artist.name),
  audioSrc: URL.createObjectURL(audio)
});

export const normalizeFormAlbum = {
  toMockStorageAlbum({
    title,
    cover,
    tracklist
  }: AlbumCandidate): TMockStorageAlbum {
    if (cover === null) {
      throw new Error("Cover is required");
    }
    return {
      id: getUniqueString(),
      title,
      coverSrc: URL.createObjectURL(cover),
      tracklist: tracklist.map(formTrackToServiceTrack)
    };
  }
};
