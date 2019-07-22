// @flow strict

import * as React from "react";

import { useDispatch } from "hooks/useDispatch";

import { AlbumEditorWrapper } from "./styled/AlbumEditorWrapper";
import { AlbumEditorFooter } from "./styled/AlbumEditorFooter";
import { AlbumEditorButton } from "./styled/AlbumEditorButton";

import { AlbumCoverEditor } from "./nested/AlbumCoverEditor";

import { AlbumEditorTracklist } from "./AlbumEditorTracklist";
import { AlbumEditorAbout } from "./AlbumEditorAbout";

export const AlbumEditor = () => {
  const dispatch = useDispatch();

  const handleSubmit = React.useCallback(() => {
    dispatch({
      type: "ALBUM_EDITOR__SUBMIT"
    });
  }, [dispatch]);

  const handleCancel = React.useCallback(() => {
    dispatch({
      type: "ALBUM_EDITOR__CANCEL"
    });
  }, [dispatch]);

  return (
    <AlbumEditorWrapper onSubmit={handleSubmit}>
      <AlbumCoverEditor />
      <AlbumEditorAbout />
      <AlbumEditorTracklist />
      <AlbumEditorFooter>
        <AlbumEditorButton submit>share</AlbumEditorButton>
        <AlbumEditorButton onClick={handleCancel}>cancel</AlbumEditorButton>
      </AlbumEditorFooter>
    </AlbumEditorWrapper>
  );
};
