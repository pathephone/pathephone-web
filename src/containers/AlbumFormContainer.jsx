// @flow strict

import type { TFormAlbum } from "types/uiDataTypes";

import * as React from 'react';

import { renderTrackInputs } from 'containers/AlbumFormContainer/renderTrackInputs';
import { AlbumFormWrapper } from 'components/AlbumForm/AlbumFormComponents';
import { AlbumFormFieldset } from 'components/AlbumForm/AlbumFormComponents';
import { CustomTextInput } from 'components/CustomTextInput';
import { AlbumCoverInputContainer } from 'containers/AlbumFormContainer/AlbumCoverInputContainer';
import { AlbumTracklistInputContainer } from 'containers/AlbumFormContainer/AlbumTracklistInputContainer';

type TProps = {|
  data: TFormAlbum;
  onDataChange(data: TFormAlbum): void;
  onSubmit(): void;
  onCancel(): void;
|}

export const AlbumFormContainer = (props: TProps) => {

  const { data, onDataChange, onSubmit, onCancel } = props;

  const handleChange = (e: SyntheticEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    onDataChange({
      ...data,
      [name]: value
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
        <AlbumCoverInputContainer
          data={data}
          onDataChange={onDataChange}
        />
      </AlbumFormFieldset>
      <AlbumFormFieldset title="tracklist">
        {
          data.tracklist.map(renderTrackInputs(handleTracklistChange))
        }
        <AlbumTracklistInputContainer
          data={data}
          onDataChange={onDataChange}
        />
      </AlbumFormFieldset>
      <span>
        <button onClick={onSubmit}>
          share
        </button>
        <button onClick={onCancel}>
          cancel
        </button>
      </span>
    </AlbumFormWrapper>
  )
}
