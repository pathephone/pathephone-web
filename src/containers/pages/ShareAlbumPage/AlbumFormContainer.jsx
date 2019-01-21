// @flow strict

import type { TFormAlbum } from "types/uiDataTypes";

import * as React from 'react';

import { AlbumFormWrapper } from 'components/AlbumForm/AlbumFormComponents';
import { Card } from 'components/Card/CardComponents';
import { AlbumFormAboutBlock } from 'components/AlbumForm/AlbumFormComponents';
import { AlbumFormAboutInputs } from 'components/AlbumForm/AlbumFormComponents';
import { CustomTextInput } from 'components/CustomTextInput/CustomTextInputComponents';
import { AlbumFormFooter } from 'components/AlbumForm/AlbumFormComponents';
import { AlbumFormButton } from 'components/AlbumForm/AlbumFormComponents';

import { CoverInputContainer } from './AlbumForm/CoverInputContainer';
import { renderTrackInputs } from './AlbumForm/renderTrackInputs';
import { AlbumTracksInputContainer } from './AlbumForm/AlbumTracksInputContainer';

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
        <CoverInputContainer
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
        <AlbumTracksInputContainer
          data={data}
          onDataChange={onDataChange}
        />
      </Card>
      <AlbumFormFooter>
        <AlbumFormButton onClick={onSubmit}>
          share
        </AlbumFormButton>
        <AlbumFormButton onClick={onCancel}>
          cancel
        </AlbumFormButton>
      </AlbumFormFooter>
    </AlbumFormWrapper>
  )
}
