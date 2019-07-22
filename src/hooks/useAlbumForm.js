// @flow strict

import type { TAlbumFormValidity } from "types/state";

import { StrictHookError } from "data/errors";

import { useShareAlbumPageState } from "./useShareAlbumPageState";

export const useAlbumFormData = () => {
  const { albumFormData } = useShareAlbumPageState();

  return albumFormData;
};

export const useAlbumFormDataStrict = () => {
  const data = useAlbumFormData();

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
  const data = useAlbumFormDataStrict();
  const validation = useAlbumFormValidation();

  const value = data.title;
  const errorMessage = validation.reduce<string | void>(
    (acc, validity: TAlbumFormValidity) => {
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
  const data = useAlbumFormDataStrict();
  const validation = useAlbumFormValidation();

  const value = data.cover;

  const errorMessage = validation.reduce<string | void>(
    (acc, validity: TAlbumFormValidity) => {
      switch (validity.type) {
        case "COVER_REQUIRED":
          return "Cover is required";
        default:
          return acc;
      }
    },
    undefined
  );

  return { value, errorMessage };
};

export const useAlbumFormTrackStrict = (targetId: string) => {
  const { tracklist } = useAlbumFormDataStrict();

  const track = tracklist.find(({ id }) => id === targetId);

  if (!track) {
    throw new StrictHookError();
  }

  return track;
};

export const useAlbumFormArtistValidity = (params: {
  trackId: string,
  artistId: string
}) => {
  const validation = useAlbumFormValidation();

  return !validation.some((validity: TAlbumFormValidity) => {
    return (
      validity.type === "EMPTY_TRACK_ARTISTS" &&
      validity.payload === params.trackId
    );
  });
};

export const useAlbumFormTrackTitleInput = (trackId: string) => {
  const { tracklist } = useAlbumFormDataStrict();

  const validation = useAlbumFormValidation();

  const track = tracklist.find(track => track.id === trackId);

  if (!track) {
    throw new TypeError();
  }

  const { title: value } = track;

  const validationMessage = validation.reduce<string | void>(
    (acc, validity: TAlbumFormValidity) => {
      if (
        validity.type === "EMPTY_TRACK_TITLE" &&
        validity.payload === trackId
      ) {
        return "Field is required";
      }
      return acc;
    },
    undefined
  );

  return { value, validationMessage };
};

export const useAlbumFormTracklistValidity = () => {
  const validation = useAlbumFormValidation();

  return !validation.some((validity: TAlbumFormValidity) => {
    return validity.type === "EMPTY_TRACKLIST";
  });
};
