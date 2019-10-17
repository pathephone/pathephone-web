import { StrictHookError } from "util/error";

import { AlbumFormValidity } from "type/state";

import { useShareAlbumPageState } from "./useShareAlbumPageState";
import { useIntlDictionary } from "./useIntl";

export const useAlbumCandidate = () => {
  const { albumFormData } = useShareAlbumPageState();

  return albumFormData;
};

export const useAlbumCandidateStrict = () => {
  const data = useAlbumCandidate();

  if (!data) {
    throw new StrictHookError();
  }

  return data;
};

export const useAlbumFormValidation = () => {
  const { albumFormValidation } = useShareAlbumPageState();

  return albumFormValidation;
};

export const useAlbumFormTitleInput = () => {
  const data = useAlbumCandidateStrict();
  const validation = useAlbumFormValidation();

  const value = data.title;
  const errorMessage = validation.reduce<string | undefined>(
    (acc, validity: AlbumFormValidity) => {
      if (validity.type === "TITLE_REQUIRED") {
        return "Title is required";
      }
      return acc;
    },
    undefined
  );

  return { value, errorMessage };
};

export const useAlbumFormCoverInput = () => {
  const data = useAlbumCandidateStrict();
  const validation = useAlbumFormValidation();

  const {
    albumCoverEditor: { missingCoverValidationText }
  } = useIntlDictionary();

  const value = data.cover;

  const errorMessage = validation.reduce<string | undefined>(
    (acc, validity: AlbumFormValidity) => {
      switch (validity.type) {
        case "COVER_REQUIRED":
          return missingCoverValidationText;
        default:
          return acc;
      }
    },
    undefined
  );

  return { value, errorMessage };
};

export const useTrackCandidateStrict = (targetId: string) => {
  const { tracklist } = useAlbumCandidateStrict();

  const track = tracklist.find(({ id }) => id === targetId);

  if (!track) {
    throw new StrictHookError();
  }

  return track;
};

export const useArtistCandidateValidity = (params: {
  trackId: string;
  artistId: string;
}) => {
  const validation = useAlbumFormValidation();

  return !validation.some((validity: AlbumFormValidity) => {
    return (
      validity.type === "EMPTY_TRACK_ARTISTS" &&
      validity.payload === params.trackId
    );
  });
};

export const useTrackCandidateTitleInput = (trackId: string) => {
  const { tracklist } = useAlbumCandidateStrict();

  const {
    albumTrackEditor: { missingTitleValidationText }
  } = useIntlDictionary();

  const validation = useAlbumFormValidation();

  const track = tracklist.find(track => track.id === trackId);

  if (!track) {
    throw new TypeError();
  }

  const { title: value } = track;

  const validationMessage = validation.reduce<string | undefined>(
    (acc, validity: AlbumFormValidity) => {
      if (
        validity.type === "EMPTY_TRACK_TITLE" &&
        validity.payload === trackId
      ) {
        return missingTitleValidationText;
      }
      return acc;
    },
    undefined
  );

  return { value, validationMessage };
};

export const useTrackCandidatelistValidity = () => {
  const validation = useAlbumFormValidation();

  return !validation.some((validity: AlbumFormValidity) => {
    return validity.type === "EMPTY_TRACKLIST";
  });
};
