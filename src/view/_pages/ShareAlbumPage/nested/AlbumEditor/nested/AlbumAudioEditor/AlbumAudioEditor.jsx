// @flow strict

import * as React from "react";

import { useAlbumFormTracklistValidity } from "hooks/useAlbumForm";
import { useDispatch } from "hooks/useDispatch";
import { testId } from "utils/testId";

import { AlbumAudioEditorInput } from "./styled/AlbumAudioEditorInput";
import { AlbumAudioEditorWrapper } from "./styled/AlbumAudioEditorWrapper";
import { AlbumAudioEditorLabel } from "./styled/AlbumAudioEditorLabel";

export const AlbumAudioEditor = () => {
  const dispatch = useDispatch();

  const valid = useAlbumFormTracklistValidity();

  const validationMessage = React.useMemo(() => {
    if (!valid) {
      return "At least one track required";
    }
  }, [valid]);

  const handleAddTrack = React.useCallback(
    (files: FileList) => {
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
        text="Add tracks"
        validationMessage={validationMessage}
        validationTestId={testId.ALBUM_TRACKLIST__VALIDATION}
      />
    </AlbumAudioEditorWrapper>
  );
};
