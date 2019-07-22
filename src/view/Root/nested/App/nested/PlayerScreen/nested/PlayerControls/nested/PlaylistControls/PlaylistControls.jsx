// @flow strict

import * as React from "react";

import { ArrowDownIcon } from "icons/round-keyboard_arrow_down";
// import { ShuffleIcon } from "icons/round-shuffle";
// import { RepeatIcon } from "icons/round-repeat";
import { SkipPreviousIcon } from "icons/round-skip_previous";
import { SkipNextIcon } from "icons/round-skip_next";
import { SquareButton } from "view/SquareButton";
import { useDispatch } from "hooks/useDispatch";

import { PlaylistPopup } from "./nested/PlaylistPopup";
import { PlaylistControlsWrapper } from "./styled/PlaylistControlsWrapper";
import { PlaylistControlsGroup } from "./styled/PlaylistControlsGroup";

type TProps = {||};

export const PlaylistControls = (props: TProps) => {
  const dispatch = useDispatch();

  // const { isShuffle, isRepeat } = usePlaylistState();

  // const handleRepeat = React.useCallback(() => {
  //   toggleIsRepeat();
  // }, []);

  // const handleShuffle = React.useCallback(() => {
  //   toggleIsShuffle();
  // }, []);

  const handlePlayNextTrack = React.useCallback(() => {
    dispatch({ type: "PLAYLIST_CONTROLS__PLAY_NEXT" });
  }, [dispatch]);

  const handlePlayPreviousTrack = React.useCallback(() => {
    dispatch({ type: "PLAYLIST_CONTROLS__PLAY_PREVIOUS" });
  }, [dispatch]);

  const onClose = React.useCallback(() => {
    dispatch({ type: "PLAYLIST_CONTROLS__CLOSE" });
  }, [dispatch]);

  return (
    <PlaylistControlsWrapper>
      {/* <PlaylistControlsWrapper>
        <SquareButton hasToggledOnIndicator={isShuffle} onClick={handleShuffle}>
          <ShuffleIcon />
        </SquareButton>
        <SquareButton hasToggledOnIndicator={isRepeat} onClick={handleRepeat}>
          <RepeatIcon />
        </SquareButton>
      </PlaylistControlsWrapper> */}
      <PlaylistControlsGroup mod="skip">
        <SquareButton onClick={handlePlayPreviousTrack}>
          <SkipPreviousIcon />
        </SquareButton>
        <SquareButton onClick={handlePlayNextTrack}>
          <SkipNextIcon />
        </SquareButton>
      </PlaylistControlsGroup>
      <PlaylistControlsGroup mod="close">
        <SquareButton onClick={onClose}>
          <ArrowDownIcon />
        </SquareButton>
      </PlaylistControlsGroup>
      <PlaylistPopup />
    </PlaylistControlsWrapper>
  );
};
