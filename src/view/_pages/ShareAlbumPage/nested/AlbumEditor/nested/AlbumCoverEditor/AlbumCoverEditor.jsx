// @flow strict

import * as React from "react";

import { useAlbumFormCoverInput } from "hooks/useAlbumForm";
import { useFileURL } from "hooks/useObjectURL";
import { useDispatch } from "hooks/useDispatch";
import { AlbumIcon } from "icons/round-album";

import { AlbumCoverEditorWrapper } from "./styled/AlbumCoverEditorWrapper";
import { AlbumCoverEditorInput } from "./styled/AlbumCoverEditorInput";
import { AlbumCoverEditorPreview } from "./styled/AlbumCoverEditorPreview";
import { AlbumCoverEditorImage } from "./styled/AlbumCoverEditorImage";
import { AlbumCoverEditorError } from "./styled/AlbumCoverEditorError";

export const AlbumCoverEditor = () => {
  const dispatch = useDispatch();

  const { value, errorMessage } = useAlbumFormCoverInput();

  const handleFileChange = React.useCallback(
    (file: File) => {
      dispatch({
        type: "ALBUM_COVER_EDITOR__FILE_RECIEVED",
        payload: file
      });
    },
    [dispatch]
  );

  const coverPreviewUrl = useFileURL(value);

  return (
    <AlbumCoverEditorWrapper>
      <AlbumCoverEditorInput
        errorMessage={errorMessage}
        onFileChange={handleFileChange}
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
