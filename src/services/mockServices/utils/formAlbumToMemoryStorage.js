// @flow strict

import type { TFormAlbum } from "types/uiDataTypes";
import type { TMemoryStorageAlbum } from "./albumsStorage";

const formTrackToMemoryTrack = ({ title, artists, audio }) => ({
  title,
  artists: artists.map(a => a.name),
  audio
})

export const formAlumToMemoryStorage = ({
  title, cover, tracklist
}: TFormAlbum): TMemoryStorageAlbum => {
  if (cover === null) {
    throw new Error('COver is required');
  }
  return {
    title,
    cover,
    tracklist: tracklist.map(formTrackToMemoryTrack)
  }
}