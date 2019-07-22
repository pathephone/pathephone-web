// @flow strict

import type { TAlbumFormData, TAlbumFormValidity } from "types/state";

export const validateAlbumFormData = (
  data: TAlbumFormData
): TAlbumFormValidity[] => {
  const { title, cover, tracklist } = data;

  const validation = [];

  if (!title) {
    validation.push({
      type: "TITLE_REQUIRED"
    });
  }

  if (!cover) {
    validation.push({
      type: "COVER_REQUIRED"
    });
  }

  if (tracklist.length === 0) {
    validation.push({
      type: "EMPTY_TRACKLIST"
    });
  }

  tracklist.forEach(track => {
    if (!track.title) {
      validation.push({
        type: "EMPTY_TRACK_TITLE",
        payload: track.id
      });
    }
    if (track.artists.length === 1 && !track.artists[0].name) {
      validation.push({
        type: "EMPTY_TRACK_ARTISTS",
        payload: track.id
      });
    }
  });

  return validation;
};
