// @flow strict

import * as React from "react";

import { FloatingLabelInput } from "view/_ui/FloatingLabelInput";
import { useDispatch } from "hooks/useDispatch";
import { useAlbumFormTitleInput } from "hooks/useAlbumForm";

import { AlbumEditorFieldset } from "./styled/AlbumEditorFieldset";
import { AlbumEditorFieldsetTitle } from "./styled/AlbumEditorFieldsetTitle";
import { AlbumEditorAboutFieldsetBody } from "./styled/AlbumEditorFieldsetBody";
import { testId } from "utils/testId";

export const AlbumEditorAbout = () => {
  const dispatch = useDispatch();

  const { value, errorMessage } = useAlbumFormTitleInput();

  const handleInputChange = React.useCallback(
    (event: SyntheticEvent<HTMLInputElement>) => {
      dispatch({
        type: "ALBUM_EDITOR__TITLE_CHANGE",
        payload: event.currentTarget.value
      });
    },
    [dispatch]
  );

  return (
    <AlbumEditorFieldset>
      <AlbumEditorFieldsetTitle text="About" />
      <AlbumEditorAboutFieldsetBody withPadding>
        <FloatingLabelInput
          name="title"
          placeholder="Album title"
          value={value}
          validationMessage={errorMessage}
          onChange={handleInputChange}
          inputTestId={testId.ALBUM_EDITOR__TITLE_INPUT}
        />
      </AlbumEditorAboutFieldsetBody>
    </AlbumEditorFieldset>
  );
};
