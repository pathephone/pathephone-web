// @flow strict

import type { TAlbumFormData } from "type/state";

export const getRawAlbumFormData = (): TAlbumFormData => ({
  title: "",
  cover: null,
  tracklist: []
});
