// @flow strict

import type { TFormAlbum } from "types/uiDataTypes";

import * as React from 'react';

import { AlbumCoverInputWrapper } from 'components/AlbumCoverInput/AlbumCoverInputComponents';
import { AlbumCoverInputPreview } from 'components/AlbumCoverInput/AlbumCoverInputComponents';
import { AlbumCoverInput } from 'components/AlbumCoverInput/AlbumCoverInputComponents';

type TProps = {|
  data: TFormAlbum;
  onDataChange(data: TFormAlbum): void;
|}

export const AlbumCoverInputContainer = (props: TProps) => {

  const { data, onDataChange } = props;

  const handleCoverChange = (e: SyntheticEvent<HTMLInputElement>) => {
    const { files } = e.currentTarget;
    onDataChange({
      ...data,
      cover: files[0]
    })
    e.currentTarget.value = '';
  }
  
  let coverPreviewUrl: string | null = null

  if (data.cover) {
    coverPreviewUrl = URL.createObjectURL(data.cover);
  }

  return (
    <AlbumCoverInputWrapper>
      {
        coverPreviewUrl !== null && (
          <AlbumCoverInputPreview
            src={coverPreviewUrl}
          />
        )
      }
      <AlbumCoverInput
        onChange={handleCoverChange}
      />
    </AlbumCoverInputWrapper>
  )
}
