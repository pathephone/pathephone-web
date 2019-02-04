// @flow strict

import type { TPlaylistTrack } from "types/stateTypes";
import type { TMockStorageTrack } from "types/mockTypes";

import { getUniqueString } from "utils/getUniqueString";

export const mockStorageTrackToPlaylistTrack = ({
  title,
  artists,
  audioSrc
}: TMockStorageTrack): TPlaylistTrack => ({
  id: getUniqueString(),
  title,
  artistName: artists.join(", "),
  audioSrc
});
