// @flow strict
import type { TEvent } from "types/event";
import type { TPlayerState } from "types/state";

import React from "react";

import { getPreviousPlayingTrackId, getNextPlayingTrackId } from "./utils";

const initialPlayerState: TPlayerState = {
  screen: "OVERVIEW",
  playlist: [],
  playingTrackId: null,
  audioStatus: "PAUSED"
};

const playerStateReducer = (
  state: TPlayerState,
  event: TEvent
): TPlayerState => {
  switch (event.type) {
    case "FEED_ALBUM__ADD_TO_PLAYLIST": {
      // Handle case when ampty array was dispatched
      if (event.payload.length === 0) {
        return state;
      }
      return {
        ...state,
        playlist: [...state.playlist, ...event.payload],
        playingTrackId:
          state.playingTrackId === null
            ? event.payload[0].id
            : state.playingTrackId
      };
    }

    case "FEED_ALBUM__PLAY": {
      if (event.payload.length === 0) {
        return state;
      }
      return {
        ...state,
        playlist: [...event.payload],
        playingTrackId: event.payload[0].id,
        audioStatus: "PLAYING"
      };
    }

    case "AUDIO__WAITING": {
      return {
        ...state,
        audioStatus: "PENDING"
      };
    }

    case "AUDIO__PLAYING":
    case "PLAYBACK_CONTROLS__PLAY": {
      return {
        ...state,
        audioStatus: "PLAYING"
      };
    }

    case "AUDIO__PAUSED":
    case "PLAYBACK_CONTROLS__PAUSE": {
      return {
        ...state,
        audioStatus: "PAUSED"
      };
    }

    case "AUDIO__ENDED": {
      const nextTrackId = getNextPlayingTrackId(state);
      const fallbackTrackId = state.playlist[0].id;
      return {
        ...state,
        playingTrackId: nextTrackId !== null ? nextTrackId : fallbackTrackId,
        audioStatus: nextTrackId !== null ? "PLAYING" : "PAUSED"
      };
    }

    case "PLAYLIST_CONTROLS__PLAY_NEXT": {
      const nextTrackId = getNextPlayingTrackId(state);
      const fallbackTrackId = state.playlist[0].id;
      return {
        ...state,
        playingTrackId: nextTrackId !== null ? nextTrackId : fallbackTrackId
      };
    }

    case "PLAYLIST_CONTROLS__PLAY_PREVIOUS": {
      const prevTrackId = getPreviousPlayingTrackId(state);
      const fallbackTrackId = state.playlist[0].id;
      return {
        ...state,
        playingTrackId: prevTrackId !== null ? prevTrackId : fallbackTrackId
      };
    }

    case "PLAYLIST_TRACK__PLAY": {
      return {
        ...state,
        playingTrackId: event.payload,
        audioStatus: "PLAYING"
      };
    }

    case "PLAYLIST_TRACK__REMOVE": {
      // Create next playlist without removed track
      const nextPlaylist = state.playlist.filter(
        track => track.id !== event.payload
      );

      // Handle case when last track was removed.
      if (nextPlaylist.length === 0) {
        return {
          ...initialPlayerState
        };
      }

      // Handle case when currently playing track was removed.
      if (state.playingTrackId === event.payload) {
        return {
          ...state,
          playlist: nextPlaylist,
          playingTrackId: getNextPlayingTrackId(state)
        };
      }

      return {
        ...state,
        playlist: nextPlaylist
      };
    }

    case "PLAYLIST_POPUP__CLEAR": {
      return {
        ...initialPlayerState
      };
    }

    case "OVERVIEW_CONTROLS__OPEN_SEARCH": {
      return {
        ...state,
        screen: "SEARCH"
      };
    }

    case "SEARCH_CONTROLS__SUBMIT":
    case "SEARCH_CONTROLS__CANCEL": {
      return {
        ...state,
        screen: "OVERVIEW"
      };
    }

    default:
      return state;
  }
};

export const usePlayerState = () => {
  return React.useReducer<TPlayerState, TEvent>(
    playerStateReducer,
    initialPlayerState
  );
};
