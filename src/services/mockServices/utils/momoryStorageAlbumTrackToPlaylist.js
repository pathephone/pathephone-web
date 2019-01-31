// @flow strict

import type { TPlaylistTrack } from "types/stateTypes";
import type { TMemoryStorageTrack } from "./albumsStorage";

export const momoryStorageAlbumTrackToPlaylist = (
  { title, artists, audio }: TMemoryStorageTrack
): TPlaylistTrack => ({
  id: '',
  title,
  artistName: artists.join(', '),
  audioSrc: URL.createObjectURL(audio)
})