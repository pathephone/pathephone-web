// @flow strict

import type { TPlaylistTrack } from 'types/state'
import type { TPlaylistAction } from 'types/actions'

import * as React from 'react';

type TPlaylistContext = {
  tracks: TPlaylistTrack[];
  replaceTracks(tracks: TPlaylistTrack[]): void;
  queueTracks(tracks: TPlaylistTrack[]): void;
  removeTrackById(id: string): void;
  playTrackById(id: string): void;
}

export const PlaylistContext = React.createContext<TPlaylistContext | null>(null);