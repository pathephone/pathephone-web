// @flow strict

import * as React from "react";

import { useFileURL } from "hooks/useObjectURL";

import { AlbumIcon } from "icons/round-album";
import { AlbumCoverEditorWrapper } from "./styled/AlbumCoverEditorWrapper";
import { AlbumCoverEditorInput } from "./styled/AlbumCoverEditorInput";
import { AlbumCoverEditorPreview } from "./styled/AlbumCoverEditorPreview";
import { AlbumCoverEditorImage } from "./styled/AlbumCoverEditorImage";
import { AlbumCoverEditorError } from "./styled/AlbumCoverEditorError";

type TProps = {|
  value: null | File,
  errorMessage?: string,
  onChange(nextValue: File): void
|};

export const AlbumCoverEditor = (props: TProps) => {
  const { value, errorMessage, onChange } = props;

  const handleCoverChange = (e: SyntheticEvent<HTMLInputElement>) => {
    const { files } = e.currentTarget;
    onChange(files[0]);
    e.currentTarget.value = "";
  };

  const coverPreviewUrl = useFileURL(value);

  return (
    <AlbumCoverEditorWrapper>
      <AlbumCoverEditorInput
        errorMessage={errorMessage}
        onChange={handleCoverChange}
      />
      <AlbumCoverEditorPreview>
        {coverPreviewUrl !== null && errorMessage === undefined ? (
          <AlbumCoverEditorImage src={coverPreviewUrl} />
        ) : (
          <AlbumIcon />
        )}
      </AlbumCoverEditorPreview>
      {errorMessage !== undefined && (
        <AlbumCoverEditorError text={errorMessage} />
      )}
    </AlbumCoverEditorWrapper>
  );
};
