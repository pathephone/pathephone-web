// @flow strict

import * as React from "react";

import { FloatingLabelInput } from "view/_ui/FloatingLabelInput";
import { useDispatch } from "hooks/useDispatch";
import { useAlbumFormTitleInput } from "hooks/useAlbumForm";
import { testId } from "utils/testId";
import { useIntlDictionary } from "hooks/useIntl";

import { AlbumEditorFieldset } from "./styled/AlbumEditorFieldset";
import { AlbumEditorFieldsetTitle } from "./styled/AlbumEditorFieldsetTitle";
import { AlbumEditorAboutFieldsetBody } from "./styled/AlbumEditorFieldsetBody";

export const AlbumEditorAbout = () => {
  const {
    albumEditor: { aboutFieldsetTitleText, albumTitleInputPlaceholderText }
  } = useIntlDictionary();

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
      <AlbumEditorFieldsetTitle text={aboutFieldsetTitleText} />
      <AlbumEditorAboutFieldsetBody withPadding>
        <FloatingLabelInput
          name="title"
          placeholder={albumTitleInputPlaceholderText}
          value={value}
          validationMessage={errorMessage}
          onChange={handleInputChange}
          inputTestId={testId.ALBUM_EDITOR__TITLE_INPUT}
        />
      </AlbumEditorAboutFieldsetBody>
    </AlbumEditorFieldset>
  );
};
