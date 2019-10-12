// @flow strict

import * as React from "react";

import { FloatingLabelInput } from "view/kit/FloatingLabelInput";
import { useDispatch } from "hook/useDispatch";
import { useAlbumFormTrackTitleInput } from "hook/useAlbumForm";
import { testId } from "util/testId";
import { useIntlDictionary } from "hook/useIntl";

type TProps = {
  trackId: string
};

export const AlbumTrackEditorTitleInput = (props: TProps) => {
  const { trackId } = props;

  const {
    albumTrackEditor: { titleInputPlaceholderText }
  } = useIntlDictionary();

  const { value, validationMessage } = useAlbumFormTrackTitleInput(trackId);

  const dispatch = useDispatch();

  const handleTrackInputChange = React.useCallback(
    (event: SyntheticEvent<HTMLInputElement>) => {
      const { value } = event.currentTarget;
      dispatch({
        type: "ALBUM_TRACK_EDITOR__TITLE_CHANGE",
        payload: { value, trackId }
      });
    },
    [dispatch, trackId]
  );

  return (
    <FloatingLabelInput
      inputTestId={testId.ALBUM_TRACK_EDITOR__TITLE_INPUT}
      validationTestId={testId.ALBUM_TRACK_EDITOR__TITLE_VALIDATION}
      name="title"
      value={value}
      validationMessage={validationMessage}
      placeholder={titleInputPlaceholderText}
      onChange={handleTrackInputChange}
    />
  );
};
