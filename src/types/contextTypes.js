// @flow strict

import type { TPlaylistTrack } from 'types/stateTypes'

import { mockServices } from "services/mock";
import { appContextMock } from "data/appContextMock";
import { defaultLocaleStrings } from "data/defaultLocaleStrings";

export type TServicesContext = typeof mockServices;
export type TLocaleStringsContext = typeof defaultLocaleStrings;
export type TAppContext = typeof appContextMock;

export type TPlayerContext = {|
  playlist: TPlaylistTrack[];
  playingTrackId: null | number;
  isPaused: boolean;
  toggleIsPaused(): void;
  setPlayingTrackId(id: null | number): void;
  addPlaylistTracks(newTracks: TPlaylistTrack[]): void;
  removePlaylistTrack(id: number): void;
  clearPlaylist(): void;
|}