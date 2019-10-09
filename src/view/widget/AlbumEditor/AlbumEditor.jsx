// @flow strict

import * as React from "react";

import { useDispatch } from "hooks/useDispatch";
import { useIntlDictionary } from "hooks/useIntl";

import { AlbumCoverEditor } from "view/widget/AlbumCoverEditor";

import { AlbumEditorWrapper } from "./styled/AlbumEditorWrapper";
import { AlbumEditorFooter } from "./styled/AlbumEditorFooter";
import { AlbumEditorButton } from "./styled/AlbumEditorButton";

import { AlbumEditorTracklist } from "./AlbumEditorTracklist";
import { AlbumEditorAbout } from "./AlbumEditorAbout";

export const AlbumEditor = () => {
  const {
    albumEditor: { submitButtonText, cancelButtonText }
  } = useIntlDictionary();

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
        <AlbumEditorButton submit>{submitButtonText}</AlbumEditorButton>
        <AlbumEditorButton onClick={handleCancel}>
          {cancelButtonText}
        </AlbumEditorButton>
      </AlbumEditorFooter>
    </AlbumEditorWrapper>
  );
};
