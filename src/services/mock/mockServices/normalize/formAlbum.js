// @flow strict

import type { TAlbumFormData } from "types/state";
import type { TMockStorageAlbum } from "types/mockTypes";

import { getUniqueString } from "utils/getUniqueString";

const formTrackToServicesTrack = ({ title, artists, audio }) => ({
  title,
  artists: artists.map(a => a.name),
  audioSrc: URL.createObjectURL(audio)
});

export const normalizeFormAlbum = {
  toMockStorageAlbum({
    title,
    cover,
    tracklist
  }: TAlbumFormData): TMockStorageAlbum {
    if (cover === null) {
      throw new Error("Cover is required");
    }
    return {
      id: getUniqueString(),
      title,
      coverSrc: URL.createObjectURL(cover),
      tracklist: tracklist.map(formTrackToServicesTrack)
    };
  }
};
