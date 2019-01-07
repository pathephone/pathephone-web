// @flow strict

import type { TFormAlbum, TFormTrack } from "types/uiDataTypes";

import * as React from 'react';

import { renderTrackInputs } from 'containers/AlbumFormContainer/renderTrackInputs';
import { AlbumFormWrapper } from 'components/AlbumForm/AlbumFormComponents';
import { AlbumFormFieldset } from 'components/AlbumForm/AlbumFormComponents';
import { getTrackFormDataFromFile } from 'utils/getAlbumFormDataFromFiles';

type TProps = {|
  data: TFormAlbum;
  onDataChange(data: TFormAlbum): void;
  onSubmit(): void;
|}

export const AlbumFormContainer = (props: TProps) => {

  const { data, onDataChange, onSubmit } = props;

  const handleChange = (e: SyntheticEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    onDataChange({
      ...data,
      [name]: value
    })
  }

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

  const handleTracklistChange = (tracklist) => {
    onDataChange({
      ...data,
      tracklist
    })
  }

  return (
    <AlbumFormWrapper onSubmit={onSubmit}>
      <AlbumFormFieldset title="about">
        <label>
          Album title<br />
          <input 
            type="text"
            name="title"
            placeholder="Album title"
            value={data.title} 
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Album cover<br />
          <input 
            type="file" 
            name="cover"
            onChange={handleChange}
          />
        </label>
      </AlbumFormFieldset>
      <AlbumFormFieldset title="tracklist">
        {
          data.tracklist.map(renderTrackInputs(handleTracklistChange))
        }
        <input
          type="file"
          name="tracklist"
          onChange={handleAddTrack}
        />
      </AlbumFormFieldset>
      <button onClick={onSubmit}>
        share
      </button>
    </AlbumFormWrapper>
  )
}
