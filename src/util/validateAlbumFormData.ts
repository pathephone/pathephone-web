import { AlbumFormData, AlbumFormValidity } from "type/state";

export const validateAlbumFormData = (
  data: AlbumFormData
): AlbumFormValidity[] => {
  const { title, cover, tracklist } = data;

  const validation: AlbumFormValidity[] = [];

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
