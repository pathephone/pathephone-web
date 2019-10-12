// @flow strict

import * as React from "react";

import { ArrowUpIcon } from "view/icon/round-keyboard_arrow_up";
import { ArrowDownIcon } from "view/icon/round-keyboard_arrow_down";
import { DeleteIcon } from "view/icon/round-delete";
import { useDispatch } from "hook/useDispatch";

import { AlbumTrackEditorWrapper } from "./styled/AlbumTrackEditorWrapper";
import { AlbumTrackEditorButton } from "./styled/AlbumTrackEditorButton";
import { AlbumTrackEditorControls } from "./styled/AlbumTrackEditorControls";
import { AlbumTrackEditorInputs } from "./AlbumTrackEditorInputs";
import { testId } from "util/testId";

type TProps = {
  trackId: string,
  moveDownDisabled: boolean,
  moveUpDisabled: boolean
};

export const AlbumTrackEditor = (props: TProps) => {
  const { trackId, moveDownDisabled, moveUpDisabled } = props;

  const dispatch = useDispatch();

  const handleRemove = React.useCallback(() => {
    dispatch({
      type: "ALBUM_TRACK_EDITOR__REMOVE",
      payload: trackId
    });
  }, [dispatch, trackId]);

  const handleMoveUp = React.useCallback(() => {
    dispatch({
      type: "ALBUM_TRACK_EDITOR__MOVE_UP",
      payload: trackId
    });
  }, [dispatch, trackId]);

  const handleMoveDown = React.useCallback(() => {
    dispatch({
      type: "ALBUM_TRACK_EDITOR__MOVE_DOWN",
      payload: trackId
    });
  }, [dispatch, trackId]);

  return (
    <AlbumTrackEditorWrapper>
      <AlbumTrackEditorInputs trackId={trackId} />
      <AlbumTrackEditorControls>
        <AlbumTrackEditorButton
          isDisabled={moveUpDisabled}
          onClick={handleMoveUp}
        >
          <ArrowUpIcon />
        </AlbumTrackEditorButton>
        <AlbumTrackEditorButton
          isDisabled={moveDownDisabled}
          onClick={handleMoveDown}
        >
          <ArrowDownIcon />
        </AlbumTrackEditorButton>
        <AlbumTrackEditorButton
          onClick={handleRemove}
          testId={testId.ALBUM_TRACK_EDITOR__REMOVE_BUTTON}
        >
          <DeleteIcon />
        </AlbumTrackEditorButton>
      </AlbumTrackEditorControls>
    </AlbumTrackEditorWrapper>
  );
};
