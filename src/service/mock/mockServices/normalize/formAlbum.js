// @flow strict

import type { TAlbumFormData } from "type/state";
import type { TMockStorageAlbum } from "type/mockTypes";

import { getUniqueString } from "util/getUniqueString";

const formTrackToServicesTrack = ({ title, artists, audio }) => ({
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
