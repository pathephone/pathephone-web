// @flow strict

import type { TFormAlbum, TFormTrack } from "types/uiDataTypes";

import * as React from 'react';

import { renderTrackInputs } from 'containers/AlbumFormContainer/renderTrackInputs';
import { AlbumFormWrapper } from 'components/AlbumForm/AlbumFormComponents';
import { AlbumFormFieldset } from 'components/AlbumForm/AlbumFormComponents';
import { getTrackFormDataFromFile } from 'utils/getAlbumFormDataFromFiles';
import { CustomTextInput } from 'components/CustomTextInput';

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

  const handleCoverChange = (e: SyntheticEvent<HTMLInputElement>) => {
    const { files } = e.currentTarget;
    e.currentTarget.value = '';
    onDataChange({
      ...data,
      cover: files[0]
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
        <CustomTextInput 
          label="Album title"
          name="title"
          value={data.title}
          onChange={handleChange}
        />
        <br />
        <label>
          Album cover<br />
          <input 
            type="file" 
            name="cover"
            onChange={handleCoverChange}
          />
        </label>
      </AlbumFormFieldset>
      <AlbumFormFieldset title="tracklist">
        {
          data.tracklist.map(renderTrackInputs(handleTracklistChange))
        }
        <input
          type="file"
          multiple
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
