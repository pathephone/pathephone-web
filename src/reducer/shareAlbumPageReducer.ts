import { ShareAlbumPageState } from "type/state";
import { AppEvent } from "type/event";
import { validateAlbumCandidate } from "util/validateAlbumCandidate";
import { patchAlbumCandidate } from "util/patchAlbumFormData";
import { patchShareAlbumPageState } from "util/patchShareAlbumPageState";
import { createShareAlbumPageState } from "util/createShareAlbumPageState";

export const shareAlbumPageReducer = (
  state: ShareAlbumPageState,
  event: AppEvent
): ShareAlbumPageState => {
  switch (event.type) {
    case "SHARE_ALBUM_PAGE__WILL_UNMOUNT": {
      return createShareAlbumPageState();
    }
    case "ALBUM_EDITOR__TITLE_CHANGE": {
      if (state.albumFormData) {
        const nextFormData = {
          ...state.albumFormData,
          title: event.payload
        };

        const nextFormValidation = validateAlbumCandidate(nextFormData);

        return patchShareAlbumPageState(state)
          .setAlbumFormData(nextFormData)
          .setAlbumFormValidation(nextFormValidation)
          .done();
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

        return patchShareAlbumPageState(state)
          .setAlbumFormData(nextFormData)
          .setAlbumFormValidation(nextFormValidation)
          .done();
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

        return patchShareAlbumPageState(state)
          .setAlbumFormData(nextFormData)
          .setAlbumFormValidation(nextFormValidation)
          .done();
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

        return patchShareAlbumPageState(state)
          .setAlbumFormData(nextFormData)
          .setAlbumFormValidation(nextFormValidation)
          .done();
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

        return patchShareAlbumPageState(state)
          .setAlbumFormData(nextFormData)
          .setAlbumFormValidation(nextFormValidation)
          .done();
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

        return patchShareAlbumPageState(state)
          .setAlbumFormData(nextFormData)
          .setAlbumFormValidation(nextFormValidation)
          .done();
      }
      return state;
    }
    case "ALBUM_TRACK_EDITOR__REMOVE": {
      if (state.albumFormData) {
        const nextFormData = patchAlbumCandidate(state.albumFormData)
          .removeTrack(event.payload)
          .done();

        const nextFormValidation = validateAlbumCandidate(nextFormData);

        return patchShareAlbumPageState(state)
          .setAlbumFormData(nextFormData)
          .setAlbumFormValidation(nextFormValidation)
          .done();
      }
      return state;
    }
    case "ALBUM_EDITOR__CANCEL": {
      return patchShareAlbumPageState(state)
        .setAlbumFormData(null)
        .setAlbumFormValidation([])
        .done();
    }
    case "GET_ALBUM_CANDIDATE_FROM_FILES": {
      if (event.status === "RESOLVED") {
        if (state.albumFormData) {
          const { albumFormData } = state;

          let nextFormData = patchAlbumCandidate(albumFormData)
            .addTracks(event.payload.tracklist)
            .addRawArtists()
            .done();

          const nextFormValidation = validateAlbumCandidate(nextFormData);

          return patchShareAlbumPageState(state)
            .setAlbumFormData(nextFormData)
            .setAlbumFormValidation(nextFormValidation)
            .done();
        }

        const nextFormData = patchAlbumCandidate(event.payload)
          .addRawArtists()
          .done();

        const nextFormValidation = validateAlbumCandidate(nextFormData);

        return patchShareAlbumPageState(state)
          .setFiles(null)
          .setAlbumFormData(nextFormData)
          .setAlbumFormValidation(nextFormValidation)
          .setDidSucceed(false)
          .done();
      }
      if (event.status === "REJECTED") {
        return patchShareAlbumPageState(state)
          .setFiles(null)
          .setAlbumFormData(null)
          .setAlbumFormValidation([])
          .setDidSucceed(false)
          .setSubmited(false)
          .setError(event.payload)
          .done();
      }
      return state;
    }
    case "SUBMIT_ALBUM_CANDIDATE": {
      if (event.status === "RESOLVED") {
        return patchShareAlbumPageState(state)
          .setAlbumFormData(null)
          .setAlbumFormValidation([])
          .setDidSucceed(true)
          .setSubmited(false)
          .done();
      }
      if (event.status === "REJECTED") {
        return patchShareAlbumPageState(state)
          .setAlbumFormData(null)
          .setAlbumFormValidation([])
          .setDidSucceed(false)
          .setSubmited(false)
          .setError(event.payload)
          .done();
      }

      return state;
    }
    case "ALBUM_EDITOR__SUBMIT": {
      return patchShareAlbumPageState(state)
        .setSubmited(true)
        .done();
    }
    case "DROP_ZONE__FILES_RECIEVED":
    case "ALBUM_AUDIO_EDITOR__TRACKS_RECIEVED": {
      return patchShareAlbumPageState(state)
        .setFiles(event.payload)
        .done();
    }
    default:
      return state;
  }
};
