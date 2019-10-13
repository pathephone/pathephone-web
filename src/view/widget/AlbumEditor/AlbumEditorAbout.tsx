import * as React from "react";

import { FloatingLabelInput } from "view/kit/FloatingLabelInput";
import { useDispatch } from "hook/useDispatch";
import { useAlbumFormTitleInput } from "hook/useAlbumForm";
import { testId } from "util/testId";
import { useIntlDictionary } from "hook/useIntl";

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
    (event: React.SyntheticEvent<HTMLInputElement>) => {
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
