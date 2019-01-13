// @flow strict

import type { TFormAlbum, TFormTrack } from "types/uiDataTypes";

import * as mm from 'music-metadata-browser';

import { getRawAlbumFormData, getRawAlbumFormArtistData } from "data/models";
import { getUniqueString } from "utils/getUniqueString";
import { supportedAudioFileTypes, supportedImageFileTypes } from 'data/fileTypes';

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
      
      artists.push(getRawAlbumFormArtistData())

      return {
        key: getUniqueString(),
        audio: file,
        title,
        artists
      }
    });
}

export const getAlbumFormDataFromFiles = async (files: FileList): Promise<TFormAlbum> => {
  const filesArray = [...files];

  const audioFiles = filesArray.filter(({ type }) => supportedAudioFileTypes.includes(type))
  const coverFiles = filesArray.filter(({ type }) => supportedImageFileTypes.includes(type))

  if (audioFiles.length > 0) {
    const tracklist = await Promise.all(
      audioFiles.map(getTrackFormDataFromFile)
    )

    const cover = coverFiles[0]

    return {
      ...getRawAlbumFormData(),
      cover,
      tracklist
    }
  }

  throw new Error('No audio files have been found.')
}