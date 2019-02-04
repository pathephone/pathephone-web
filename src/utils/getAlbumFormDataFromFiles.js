// @flow strict

import type { TFormAlbum, TFormTrack } from "types/stateTypes";

import * as mm from 'music-metadata-browser';

import { getUniqueString } from "utils/getUniqueString";
import { supportedAudioFileTypes, supportedImageFileTypes, coverRegExp } from 'data/fileTypes';
import { getRawAlbumFormArtistData } from 'data/models';

/*

TODO: extract picture from audio metadata

type TPicture = {|
  format: string;
  data: Buffer;
  description?: string;
  type?: string;
|}

*/

type TAudioMetadata = {|
  tracklist: TFormTrack[];
  title: string;
|}

const getAlbumMetadataFromAudioFiles = async (files: File[]): Promise<TAudioMetadata> => {
 
  const audiosMetadata = await Promise.all(
    files.map(mm.parseBlob)
  );

  const titles = audiosMetadata.map(
    ({ common }) => common.album
  )

  const tracklist: TFormTrack[] = audiosMetadata.map(
    ({ common }, index) => {
      const artists = common.artists.map(
        (name: string) => ({
          name, key: getUniqueString()
        })
      )
      artists.push(getRawAlbumFormArtistData())
      return {
        key: getUniqueString(),
        title: common.title,
        artists,
        audio: files[index]
      }
    }
  )

  return {
    title: titles.find(title => !!title) || '',
    tracklist
  }
}

export const getAlbumFormDataFromFiles = async (files: FileList): Promise<TFormAlbum> => {
  const filesArray = [...files];

  const audioFiles = filesArray.filter(({ type }) => supportedAudioFileTypes.includes(type))
  const imageFiles = filesArray.filter(({ type }) => supportedImageFileTypes.includes(type))

  if (audioFiles.length > 0) {

    const { tracklist, title } = await getAlbumMetadataFromAudioFiles(audioFiles)

    const cover = imageFiles.find(file => coverRegExp.test(file.name))

    return {
      tracklist,
      title,
      cover: cover || null
    }
  }

  throw new Error('No audio files have been found.')
}