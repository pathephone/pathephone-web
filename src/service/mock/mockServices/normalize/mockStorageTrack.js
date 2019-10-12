// @flow strict

import type { TPlaylistTrack } from "type/state";
import type { TMockStorageTrack } from "type/mockTypes";

import { getUniqueString } from "util/getUniqueString";

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
