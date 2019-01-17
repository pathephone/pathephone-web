// @flow strict

import type { TFormAlbum, TFormTrack, TFormArtist } from "types/uiDataTypes";

import { getUniqueString } from "utils/getUniqueString";

export const getRawAlbumFormArtistData = ():TFormArtist => ({
  key: getUniqueString(),
  name: ''
})

export const getRawAlbumFormData = (): TFormAlbum => ({
  title: '',
  cover: null,
  tracklist: []
})