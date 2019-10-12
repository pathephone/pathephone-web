// @flow strict

import * as React from "react";

import { ArrowDownIcon } from "view/icon/round-keyboard_arrow_down";
// import { ShuffleIcon } from "view/icon/round-shuffle";
// import { RepeatIcon } from "view/icon/round-repeat";
import { SkipPreviousIcon } from "view/icon/round-skip_previous";
import { SkipNextIcon } from "view/icon/round-skip_next";
import { SquareButton } from "view/kit/SquareButton";
import { useDispatch } from "hook/useDispatch";
import { PlaylistPopup } from "view/widget/PlaylistPopup";

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
