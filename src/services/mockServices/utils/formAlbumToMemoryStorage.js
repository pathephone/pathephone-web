// @flow strict

import type { TFormAlbum } from "types/stateTypes";
import type { TMemoryStorageAlbum } from "./albumsStorage";

import { getUniqueString } from "utils/getUniqueString";

const formTrackToMemoryTrack = ({ title, artists, audio }) => ({
  title,
  artists: artists.map(a => a.name),
  audio
})

export const formAlumToMemoryStorage = ({
  title, cover, tracklist
}: TFormAlbum): TMemoryStorageAlbum => {
  if (cover === null) {
    throw new Error('Cover is required');
  }
  return {
    id: getUniqueString(),
    title,
    cover,
    tracklist: tracklist.map(formTrackToMemoryTrack)
  }
}