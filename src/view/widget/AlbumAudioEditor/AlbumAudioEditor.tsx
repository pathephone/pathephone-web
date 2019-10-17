import * as React from "react";

import { useTrackCandidatelistValidity } from "hook/useAlbumForm";
import { useDispatch } from "hook/useDispatch";
import { testId } from "util/testId";
import { useIntlDictionary } from "hook/useIntl";

import { AlbumAudioEditorInput } from "./styled/AlbumAudioEditorInput";
import { AlbumAudioEditorWrapper } from "./styled/AlbumAudioEditorWrapper";
import { AlbumAudioEditorLabel } from "./styled/AlbumAudioEditorLabel";

export const AlbumAudioEditor = () => {
  const {
    albumAudioEditor: { missingAudioValidationText, labelText }
  } = useIntlDictionary();

  const dispatch = useDispatch();

  const valid = useTrackCandidatelistValidity();

  const validationMessage = React.useMemo(() => {
    if (!valid) {
      return missingAudioValidationText;
    }
  }, [missingAudioValidationText, valid]);

  const handleAddTrack = React.useCallback(
    (fileList: FileList) => {
      const files = [...fileList];

      dispatch({
        type: "ALBUM_AUDIO_EDITOR__TRACKS_RECIEVED",
        payload: files
      });
    },
    [dispatch]
  );

  return (
    <AlbumAudioEditorWrapper>
      <AlbumAudioEditorInput
        validationMessage={validationMessage}
        onFilesChange={handleAddTrack}
        testId={testId.ALBUM_TRACKLIST__TRACK_INPUT}
      />
      <AlbumAudioEditorLabel
        text={labelText}
        validationMessage={validationMessage}
        validationTestId={testId.ALBUM_TRACKLIST__VALIDATION}
      />
    </AlbumAudioEditorWrapper>
  );
};
