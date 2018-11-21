// @flow strict

import type { TPlaylistTrack } from "types/state" 

export type TPlaylistAction = {
  type: 'PLAY_TRACKS',
  payload: TPlaylistTrack[]
} | {
  type: 'PLAY_TRACK',
  payload: string
} | {
  type: 'DELETE_TRACK',
  payload: string
} | {
  type: 'ADD_TRACKS',
  payload: TPlaylistTrack[]
} | {
  type: 'CLEAR_PLAYLIST'
}; 