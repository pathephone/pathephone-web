import { ShareAlbumPageState } from "type/state";
import { TEvent } from "type/event";
import { validateAlbumCandidate } from "util/validateAlbumCandidate";
import { patchAlbumCandidate } from "util/patchAlbumFormData";

export const initialShareAlbumPageState: ShareAlbumPageState = {
  screen: "SELECTING_FILES",
  files: null,
  albumFormData: null,
  albumFormValidation: [],
  didSucceed: false,
  submited: false,
  error: null
};

export const shareAlbumPageReducer = (
  state: ShareAlbumPageState,
  event: TEvent
): ShareAlbumPageState => {
  switch (event.type) {
    case "ALBUM_EDITOR__TITLE_CHANGE": {
      if (state.albumFormData) {
        const nextFormData = {
          ...state.albumFormData,
          title: event.payload
        };

        const nextFormValidation = validateAlbumCandidate(nextFormData);

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

        const nextFormValidation = validateAlbumCandidate(nextFormData);

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
        const nextFormData = patchAlbumCandidate(state.albumFormData)
          .moveTrack({
            trackId: event.payload,
            direction: "UP"
          })
          .done();

        const nextFormValidation = validateAlbumCandidate(nextFormData);

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
        const nextFormData = patchAlbumCandidate(state.albumFormData)
          .moveTrack({
            trackId: event.payload,
            direction: "DOWN"
          })
          .done();

        const nextFormValidation = validateAlbumCandidate(nextFormData);

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

        const nextFormData = patchAlbumCandidate(state.albumFormData)
          .setTrackTitle({ trackId, value })
          .done();

        const nextFormValidation = validateAlbumCandidate(nextFormData);

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
          nextFormData = patchAlbumCandidate(nextFormData)
            .removeArtist({
              trackId,
              artistId
            })
            .addRawArtists()
            .done();
        } else {
          nextFormData = patchAlbumCandidate(nextFormData)
            .setArtistName({
              trackId,
              artistId,
              value
            })
            .addRawArtists()
            .done();
        }

        const nextFormValidation = validateAlbumCandidate(nextFormData);

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
        const nextFormData = patchAlbumCandidate(state.albumFormData)
          .removeTrack(event.payload)
          .done();

        const nextFormValidation = validateAlbumCandidate(nextFormData);

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
    case "GET_ALBUM_CANDIDATE_FROM_FILES__PENDING": {
      if (state.screen === "SELECTING_FILES") {
        return {
          ...state,
          screen: "LOADING"
        };
      }
      return state;
    }
    case "SUBMIT_ALBUM_CANDIDATE__PENDING": {
      return {
        ...state,
        screen: "LOADING"
      };
    }
    case "GET_ALBUM_CANDIDATE_FROM_FILES__RESOLVED": {
      if (state.albumFormData) {
        const { albumFormData } = state;

        let nextFormData = patchAlbumCandidate(albumFormData)
          .addTracks(event.payload.tracklist)
          .addRawArtists()
          .done();

        const nextFormValidation = validateAlbumCandidate(nextFormData);

        return {
          ...state,
          files: null,
          albumFormData: nextFormData,
          albumFormValidation: nextFormValidation
        };
      }

      const nextFormData = patchAlbumCandidate(event.payload)
        .addRawArtists()
        .done();

      const nextFormValidation = validateAlbumCandidate(nextFormData);

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
    case "SUBMIT_ALBUM_CANDIDATE__RESOLVED": {
      return {
        ...state,
        screen: "SELECTING_FILES",
        albumFormData: null,
        albumFormValidation: [],
        didSucceed: true,
        submited: false
      };
    }
    case "SUBMIT_ALBUM_CANDIDATE__REJECTED":
    case "GET_ALBUM_CANDIDATE_FROM_FILES__REJECTED": {
      return {
        ...state,
        screen: "SELECTING_FILES",
        albumFormData: null,
        albumFormValidation: [],
        didSucceed: false,
        submited: false,
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
