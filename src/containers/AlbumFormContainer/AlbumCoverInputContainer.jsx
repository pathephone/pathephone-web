// @flow strict

import type { TFormAlbum } from "types/uiDataTypes";

import * as React from 'react';

type TProps = {|
  data: TFormAlbum;
  onDataChange(data: TFormAlbum): void;
|}

export const AlbumCoverInputContainer = (props: TProps) => {

  const { data, onDataChange } = props;

  const handleCoverChange = (e: SyntheticEvent<HTMLInputElement>) => {
    const { files } = e.currentTarget;
    e.currentTarget.value = '';
    onDataChange({
      ...data,
      cover: files[0]
    })
  }

  return (
    <label>
      Album cover<br />
      <input 
        type="file" 
        name="cover"
        onChange={handleCoverChange}
      />
    </label>
  )
}
