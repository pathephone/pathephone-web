// @flow strict

import type { TPlaylistTrack } from "types/state";
import type { TMockStorageTrack } from "types/mockTypes";

import { getUniqueString } from "utils/getUniqueString";

export const normalizeMockStorageTrack = {
  toPlaylistTrack({
    title,
    artists,
    audioSrc
  }: TMockStorageTrack): TPlaylistTrack {
    return {
      id: getUniqueString(),
      title,
      artistName: artists.join(", "),
      audioSrc
    };
  }
};
