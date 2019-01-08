// @flow strict

import type { TFormAlbum, TFormTrack } from "types/uiDataTypes";

import * as React from 'react';

import { getTrackFormDataFromFile } from 'utils/getAlbumFormDataFromFiles';

type TProps = {|
  data: TFormAlbum;
  onDataChange(data: TFormAlbum): void;
|}

export const AlbumTracklistInputContainer = (props: TProps) => {

  const { data, onDataChange } = props;

  const handleAddTrack = (e: SyntheticEvent<HTMLInputElement>) => {
    const { files } = e.currentTarget;
    Promise.all(
      [...files].map(
        getTrackFormDataFromFile
      )
    )
      .then((tracks: TFormTrack[]) => {
        onDataChange({
          ...data,
          tracklist: [
            ...data.tracklist,
            ...tracks
          ]
        })
      })
  }

  return (
    <input
      type="file"
      multiple
      name="tracklist"
      onChange={handleAddTrack}
    />
  )
}
