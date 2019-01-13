// @flow strict

import type { TFormAlbum } from "types/uiDataTypes";

import * as React from 'react';

import { renderTrackInputs } from 'containers/AlbumFormContainer/renderTrackInputs';
import { AlbumFormWrapper } from 'components/AlbumForm/AlbumFormComponents';
import { AlbumCoverInputContainer } from 'containers/AlbumFormContainer/AlbumCoverInputContainer';
import { AlbumTracklistInputContainer } from 'containers/AlbumFormContainer/AlbumTracklistInputContainer';
import { Card } from 'components/Card/CardComponents';
import { AlbumFormAboutBlock } from 'components/AlbumForm/AlbumFormComponents';
import { AlbumFormAboutInputs } from 'components/AlbumForm/AlbumFormComponents';
import { CustomTextInput } from 'components/CustomTextInput/CustomTextInputComponents';

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
      <AlbumFormAboutBlock>
        <AlbumCoverInputContainer
          data={data}
          onDataChange={onDataChange}
        />
        <AlbumFormAboutInputs>
          <CustomTextInput
            label="Album title"
            name="title"
            value={data.title}
            onChange={handleChange}
          />
        </AlbumFormAboutInputs>
      </AlbumFormAboutBlock>
      <Card withPadding>
        {
          data.tracklist.map(renderTrackInputs(handleTracklistChange))
        }
        <AlbumTracklistInputContainer
          data={data}
          onDataChange={onDataChange}
        />
      </Card>
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
