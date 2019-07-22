// @flow strict

import type { TAlbumFormData, TAlbumFormArtist } from "types/state";

import { getUniqueString } from "utils/getUniqueString";

export const getRawAlbumFormArtistData = (): TAlbumFormArtist => ({
  id: getUniqueString(),
  name: ""
});

export const getRawAlbumFormData = (): TAlbumFormData => ({
  title: "",
  cover: null,
  tracklist: []
});
