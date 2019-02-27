// @flow strict

import type { TPlaylistTrack } from "types/stateTypes";

import { mockServices } from "services/mock";
import { appContextMock } from "data/appContextMock";
import { defaultLocaleStrings } from "data/defaultLocaleStrings";

export type TServicesContext = typeof mockServices;
export type TLocaleStringsContext = typeof defaultLocaleStrings;
export type TAppContext = typeof appContextMock;

export type TPlayerContext = {|
  playlist: TPlaylistTrack[],
  playingTrackId: null | string,
  isPaused: boolean,
  isShuffle: boolean,
  isRepeat: boolean,
  toggleIsPaused(): void,
  toggleIsShuffle(): void,
  toggleIsRepeat(): void,
  setPlayingTrackId(id: null | string): void,
  addPlaylistTracks(newTracks: TPlaylistTrack[]): void,
  removePlaylistTrack(id: string): void,
  clearPlaylist(): void
|};
