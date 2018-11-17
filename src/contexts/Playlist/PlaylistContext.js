// @flow strict

import type { TPlaylistTrack } from 'types/state'

import * as React from 'react';

export type TPlaylistContext = {
  tracks: TPlaylistTrack[];
  replaceTracks(tracks: TPlaylistTrack[]): void;
  addTracks(tracks: TPlaylistTrack[]): void;
  clearTracks(tracks: TPlaylistTrack[]): void;
}

export const PlaylistContext = React.createContext<TPlaylistContext | null>(null);