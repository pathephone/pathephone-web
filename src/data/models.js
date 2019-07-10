// @flow strict

import type { TFormAlbum, TFormArtist } from "types/state";

import { getUniqueString } from "utils/getUniqueString";

export const getRawAlbumFormArtistData = (): TFormArtist => ({
  key: getUniqueString(),
  name: ""
});

export const getRawAlbumFormData = (): TFormAlbum => ({
  title: "",
  cover: null,
  tracklist: []
});
