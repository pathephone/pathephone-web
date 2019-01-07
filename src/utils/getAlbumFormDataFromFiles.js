// @flow strict

import type { TFormAlbum, TFormTrack } from "types/uiDataTypes";

import * as mm from 'music-metadata-browser';

import { getRawAlbumFormData } from "data/models";
import { getUniqueString } from "utils/getUniqueString";

export const getTrackFormDataFromFile = (file: File): Promise<TFormTrack> => {
  return mm
    .parseBlob(file)
    .then(metadata => {
      const { title, artists: artistsOriginal } = metadata.common;

      const artists = artistsOriginal.map(
        (name: string) => ({
          name, key: getUniqueString()
        })
      )

      return {
        key: getUniqueString(),
        audio: file,
        title,
        artists
      }
    });
}

export const getAlbumFormDataFromFiles = async (files: FileList): Promise<TFormAlbum> => {

  const tracklist = await Promise.all(
    [...files].map(getTrackFormDataFromFile)
  )

  return {
    ...getRawAlbumFormData(),
    tracklist
  }
}