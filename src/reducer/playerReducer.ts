import { TEvent } from "type/event";
import { PlayerState } from "type/state";
import { TrackPreview } from "type/model";

import { getNextPlayingTrackId } from "util/getNextPlayingTrackId";
import { getPreviousPlayingTrackId } from "util/getPreviousPlayingTrackId";

export const initialPlayerState: PlayerState = {
  primaryControls: "OVERVIEW",
  secondaryControls: "PLAYBACK",
  wantedTracksAlbumIds: [],
  playlist: [],
  playingTrackId: null,
  audioStatus: "PAUSED"
};

export const playerReducer = (
  state: PlayerState,
  event: TEvent
): PlayerState => {
  switch (event.type) {
    case "GET_TRACK_PREVIEWS_BY_ALBUM_IDS": {
      if (event.status === "RESOLVED") {
        if (event.payload.length === 0) {
          return state;
        }

        const playingTrackId =
          state.playingTrackId === null
            ? event.payload[0].id
            : state.playingTrackId;

        return {
          ...state,
          playlist: [...state.playlist, ...event.payload],
          playingTrackId
        };
      }
      return state;
    }

    case "FEED_ALBUM__PLAY": {
      return {
        ...state,
        wantedTracksAlbumIds: [...state.wantedTracksAlbumIds, event.payload],
        playlist: [],
        playingTrackId: null,
        audioStatus: "PLAYING"
      };
    }

    case "FEED_ALBUM__ADD_TO_PLAYLIST": {
      return {
        ...state,
        wantedTracksAlbumIds: [...state.wantedTracksAlbumIds, event.payload]
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

    case "AUDIO__FAILED": {
      return {
        ...state,
        audioStatus: "FAILED"
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
        audioStatus: "PENDING"
      };
    }

    case "PLAYLIST_TRACK__REMOVE": {
      // Create next playlist without removed track
      const nextPlaylist = state.playlist.filter(
        (track: TrackPreview) => track.id !== event.payload
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
        primaryControls: "SEARCH"
      };
    }

    case "SEARCH_CONTROLS__SUBMIT":
    case "SEARCH_CONTROLS__CANCEL": {
      return {
        ...state,
        primaryControls: "OVERVIEW"
      };
    }

    case "PLAYLIST_CONTROLS__CLOSE":
      return {
        ...state,
        secondaryControls: "PLAYBACK"
      };

    case "PLAYBACK_CONTROLS__OPEN_PLAYLIST":
      return {
        ...state,
        secondaryControls: "PLAYLIST"
      };
    default:
      return state;
  }
};
