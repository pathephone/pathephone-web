// @flow strict

import type { TFormAlbum, TFormTrack, TFormArtist } from "types/uiDataTypes";

import { getUniqueString } from "utils/getUniqueString";

export const getRawAlbumFormArtistData = ():TFormArtist => ({
  key: getUniqueString(),
  name: ''
})

export const getRawAlbumFormTrackData = (): TFormTrack => ({
  key: getUniqueString(),
  title: '',
  artists: [
    getRawAlbumFormArtistData()
  ],
  audio: null
})

export const getRawAlbumFormData = (): TFormAlbum => ({
  title: '',
  cover: null,
  tracklist: [
    getRawAlbumFormTrackData()
  ]
})