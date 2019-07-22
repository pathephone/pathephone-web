// @flow strict
import type { TShareAlbumPageState } from "types/state";
import type { TEvent } from "types/event";

import React from "react";

import { validateAlbumFormData } from "utils/validateAlbumFormData";
import { patchAlbumFormData } from "utils/patchAlbumFormData";

const shareAlbumPageReducer = (
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
        screenMap: {
          EDITING_ALBUM: false,
          SELECTING_FILES: true,
          LOADING: false
        },
        albumFormData: null,
        albumFormValidation: []
      };
    }
    case "PROCESS_FILES_SERVICE__PENDING": {
      if (state.screenMap.SELECTING_FILES) {
        return {
          ...state,
          screenMap: {
            EDITING_ALBUM: false,
            SELECTING_FILES: false,
            LOADING: true
          }
        };
      }
      return state;
    }
    case "SUBMIT_ALBUM_SERVICE__PENDING": {
      return {
        ...state,
        screenMap: {
          EDITING_ALBUM: false,
          SELECTING_FILES: false,
          LOADING: true
        }
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
        screenMap: {
          EDITING_ALBUM: true,
          SELECTING_FILES: false,
          LOADING: false
        },
        albumFormData: nextFormData,
        albumFormValidation: nextFormValidation,
        didSucceed: false,
        error: null
      };
    }
    case "SUBMIT_ALBUM_SERVICE__RESOLVED": {
      return {
        ...state,
        screenMap: {
          EDITING_ALBUM: false,
          SELECTING_FILES: true,
          LOADING: false
        },
        albumFormData: null,
        albumFormValidation: [],
        didSucceed: true
      };
    }
    case "SUBMIT_ALBUM_SERVICE__REJECTED":
    case "PROCESS_FILES_SERVICE__REJECTED": {
      return {
        ...state,
        screenMap: {
          EDITING_ALBUM: false,
          SELECTING_FILES: true,
          LOADING: false
        },
        albumFormData: null,
        albumFormValidation: [],
        didSucceed: false,
        error: event.payload
      };
    }
    default:
      return state;
  }
};

const shareAlbumPageInitialState: TShareAlbumPageState = {
  screenMap: {
    SELECTING_FILES: true,
    EDITING_ALBUM: false,
    LOADING: false
  },
  albumFormData: null,
  albumFormValidation: [],
  didSucceed: false,
  error: null
};

export const useShareAlbumPageReducer = () => {
  return React.useReducer<TShareAlbumPageState, TEvent>(
    shareAlbumPageReducer,
    shareAlbumPageInitialState
  );
};
