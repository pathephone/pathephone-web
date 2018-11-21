// @flow strict

import type { TPlaylistState } from 'types/state'
import type { TPlaylistAction } from 'types/actions'

export const playlistReducer = (state: TPlaylistState, action: TPlaylistAction) => {
  switch (action.type) {
    case 'PLAY_TRACKS':
      return action.payload
    default:
      return state
  }
}