// @flow strict
import type { TShareAlbumPageState } from "type/state";
import type { TEvent } from "type/event";

import { validateAlbumFormData } from "util/validateAlbumFormData";
import { patchAlbumFormData } from "util/patchAlbumFormData";

export const initialShareAlbumPageState: TShareAlbumPageState = {
  screen: "SELECTING_FILES",
  files: null,
  albumFormData: null,
  albumFormValidation: [],
  didSucceed: false,
  submited: false,
  error: null
};

export const shareAlbumPageReducer = (
  state: TShareAlbumPageState,
  event: TEvent
): TShareAlbumPageState => {
  switch (event.type) {
    case "ALBUM_EDITOR__TITLE_CHANGE": {
      if (state.albumFormData) {
        const nextFormData = {
          ...state.albumFormData,
          title: event.payload
        };

        const nextFormValidation = validateAlbumFormData(nextFormData);

        return {
          ...state,
          albumFormData: nextFormData,
          albumFormValidation: nextFormValidation
        };
      }
      return state;
    }
    case "ALBUM_COVER_EDITOR__FILE_RECIEVED": {
      if (state.albumFormData) {
        const nextFormData = {
          ...state.albumFormData,
          cover: event.payload
        };

        const nextFormValidation = validateAlbumFormData(nextFormData);

        return {
          ...state,
          albumFormData: nextFormData,
          albumFormValidation: nextFormValidation
        };
      }
      return state;
    }
    case "ALBUM_TRACK_EDITOR__MOVE_UP": {
      if (state.albumFormData) {
        const nextFormData = patchAlbumFormData(state.albumFormData)
          .moveTrack({
            trackId: event.payload,
            direction: "UP"
          })
          .done();

        const nextFormValidation = validateAlbumFormData(nextFormData);

        return {
          ...state,
          albumFormData: nextFormData,
          albumFormValidation: nextFormValidation
        };
      }
      return state;
    }
    case "ALBUM_TRACK_EDITOR__MOVE_DOWN": {
      if (state.albumFormData) {
        const nextFormData = patchAlbumFormData(state.albumFormData)
          .moveTrack({
            trackId: event.payload,
            direction: "DOWN"
          })
          .done();

        const nextFormValidation = validateAlbumFormData(nextFormData);

        return {
          ...state,
          albumFormData: nextFormData,
          albumFormValidation: nextFormValidation
        };
      }
      return state;
    }
    case "ALBUM_TRACK_EDITOR__TITLE_CHANGE": {
      if (state.albumFormData) {
        const { trackId, value } = event.payload;

        const nextFormData = patchAlbumFormData(state.albumFormData)
          .setTrackTitle({ trackId, value })
          .done();

        const nextFormValidation = validateAlbumFormData(nextFormData);

        return {
          ...state,
          albumFormData: nextFormData,
          albumFormValidation: nextFormValidation
        };
      }
      return state;
    }
    case "ALBUM_TRACK_EDITOR__ARTIST_CHANGE": {
      if (state.albumFormData) {
        const { trackId, artistId, value } = event.payload;

        let nextFormData = state.albumFormData;

        if (!value) {
          nextFormData = patchAlbumFormData(nextFormData)
            .removeArtist({
              trackId,
              artistId
            })
            .addRawArtists()
            .done();
        } else {
          nextFormData = patchAlbumFormData(nextFormData)
            .setArtistName({
              trackId,
              artistId,
              value
            })
            .addRawArtists()
            .done();
        }

        const nextFormValidation = validateAlbumFormData(nextFormData);

        return {
          ...state,
          albumFormData: nextFormData,
          albumFormValidation: nextFormValidation
        };
      }
      return state;
    }
    case "ALBUM_TRACK_EDITOR__REMOVE": {
      if (state.albumFormData) {
        const nextFormData = patchAlbumFormData(state.albumFormData)
          .removeTrack(event.payload)
          .done();

        const nextFormValidation = validateAlbumFormData(nextFormData);

        return {
          ...state,
          albumFormData: nextFormData,
          albumFormValidation: nextFormValidation
        };
      }
      return state;
    }
    case "ALBUM_EDITOR__CANCEL": {
      return {
        ...state,
        screen: "SELECTING_FILES",
        albumFormData: null,
        albumFormValidation: []
      };
    }
    case "PROCESS_FILES_SERVICE__PENDING": {
      if (state.screen === "SELECTING_FILES") {
        return {
          ...state,
          screen: "LOADING"
        };
      }
      return state;
    }
    case "SUBMIT_ALBUM_SERVICE__PENDING": {
      return {
        ...state,
        screen: "LOADING"
      };
    }
    case "PROCESS_FILES_SERVICE__RESOLVED": {
      if (state.albumFormData) {
        const { albumFormData } = state;

        let nextFormData = patchAlbumFormData(albumFormData)
          .addTracks(event.payload.tracklist)
          .addRawArtists()
          .done();

        const nextFormValidation = validateAlbumFormData(nextFormData);

        return {
          ...state,
          files: null,
          albumFormData: nextFormData,
          albumFormValidation: nextFormValidation
        };
      }

      const nextFormData = patchAlbumFormData(event.payload)
        .addRawArtists()
        .done();

      const nextFormValidation = validateAlbumFormData(nextFormData);

      return {
        ...state,
        files: null,
        screen: "EDITING_ALBUM",
        albumFormData: nextFormData,
        albumFormValidation: nextFormValidation,
        didSucceed: false,
        error: null
      };
    }
    case "SUBMIT_ALBUM_SERVICE__RESOLVED": {
      return {
        ...state,
        screen: "SELECTING_FILES",
        albumFormData: null,
        albumFormValidation: [],
        didSucceed: true
      };
    }
    case "SUBMIT_ALBUM_SERVICE__REJECTED":
    case "PROCESS_FILES_SERVICE__REJECTED": {
      return {
        ...state,
        screen: "SELECTING_FILES",
        albumFormData: null,
        albumFormValidation: [],
        didSucceed: false,
        error: event.payload
      };
    }
    case "ALBUM_EDITOR__SUBMIT": {
      return {
        ...state,
        submited: true
      };
    }
    case "DROP_ZONE__FILES_RECIEVED":
    case "ALBUM_AUDIO_EDITOR__TRACKS_RECIEVED": {
      return {
        ...state,
        files: event.payload
      };
    }
    default:
      return state;
  }
};
