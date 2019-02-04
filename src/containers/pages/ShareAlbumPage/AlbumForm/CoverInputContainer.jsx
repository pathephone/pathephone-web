// @flow strict

import type { TFormAlbum } from "types/stateTypes";

import * as React from "react";

import { AlbumCoverInputWrapper } from "components/AlbumCoverInput/AlbumCoverInputComponents";
import { AlbumCoverInputPreview } from "components/AlbumCoverInput/AlbumCoverInputComponents";
import { AlbumCoverInput } from "components/AlbumCoverInput/AlbumCoverInputComponents";
import { AlbumCoverInputImage } from "components/AlbumCoverInput/AlbumCoverInputComponents";
import { AlbumIcon } from "icons/round-album";

type TProps = {|
  data: TFormAlbum,
  onDataChange(data: TFormAlbum): void
|};

export const CoverInputContainer = (props: TProps) => {
  const { data, onDataChange } = props;

  const handleCoverChange = (e: SyntheticEvent<HTMLInputElement>) => {
    const { files } = e.currentTarget;
    onDataChange({
      ...data,
      cover: files[0]
    });
    e.currentTarget.value = "";
  };

  let coverPreviewUrl: string | null = null;

  if (data.cover) {
    coverPreviewUrl = URL.createObjectURL(data.cover);
  }

  return (
    <AlbumCoverInputWrapper>
      <AlbumCoverInputPreview>
        {coverPreviewUrl !== null ? (
          <AlbumCoverInputImage src={coverPreviewUrl} />
        ) : (
          <AlbumIcon />
        )}
      </AlbumCoverInputPreview>
      <AlbumCoverInput onChange={handleCoverChange} />
    </AlbumCoverInputWrapper>
  );
};
