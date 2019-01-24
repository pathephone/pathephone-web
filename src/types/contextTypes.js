// @flow strict

import type { TPlaylistTrack } from 'types/uiDataTypes'

import { appContextMock } from "data/appContextMock";
import { mockServices } from "services/mockServices";
import { defaultLocaleStrings } from "data/defaultLocaleStrings";

export type TServicesContext = typeof mockServices;
export type TLocaleStringsContext = typeof defaultLocaleStrings;
export type TAppContext = typeof appContextMock;

export type TPlayerContext = {|
  playlist: TPlaylistTrack[];
  playingTrackId: null | number;
  isPaused: boolean;
  toogleIsPaused(): boolean;
  setPlayingTrackId(id: null | number): boolean;
  removePlaylistTrack(id: number): boolean;
  clearPlaylist(): boolean;
|}