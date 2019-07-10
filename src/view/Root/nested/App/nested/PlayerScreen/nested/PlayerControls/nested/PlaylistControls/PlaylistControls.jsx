// @flow strict

import * as React from "react";

import { ArrowDownIcon } from "icons/round-keyboard_arrow_down";
import { ShuffleIcon } from "icons/round-shuffle";
import { RepeatIcon } from "icons/round-repeat";
import { SkipPreviousIcon } from "icons/round-skip_previous";
import { SkipNextIcon } from "icons/round-skip_next";
import { useContextStrict } from "hooks/useContextStrict";
import { PlayerContext } from "contexts/PlayerContext";
import { SquareButton } from "view/SquareButton";

import { PlaylistPopup } from "./nested/PlaylistPopup";
import { PlaylistControlsWrapper } from "./styled/PlaylistControlsWrapper";

type TProps = {|
  onSwitchToCurrentTrackMode(): void
|};

export const PlaylistControls = (props: TProps) => {
  const { onSwitchToCurrentTrackMode } = props;

  const {
    isShuffle,
    isRepeat,
    toggleIsShuffle,
    toggleIsRepeat
  } = useContextStrict(PlayerContext);

  const handleRepeat = React.useCallback(() => {
    toggleIsRepeat();
  }, [toggleIsRepeat]);

  const handleShuffle = React.useCallback(() => {
    toggleIsShuffle();
  }, [toggleIsShuffle]);

  const handleSkipNext = React.useCallback(() => {}, []);

  const handleSkipPrevious = React.useCallback(() => {}, []);

  return (
    <>
      <PlaylistControlsWrapper>
        <SquareButton hasToggledOnIndicator={isShuffle} onClick={handleShuffle}>
          <ShuffleIcon />
        </SquareButton>
        <SquareButton hasToggledOnIndicator={isRepeat} onClick={handleRepeat}>
          <RepeatIcon />
        </SquareButton>
      </PlaylistControlsWrapper>
      <PlaylistControlsWrapper>
        <SquareButton onClick={handleSkipPrevious}>
          <SkipPreviousIcon />
        </SquareButton>
        <SquareButton onClick={handleSkipNext}>
          <SkipNextIcon />
        </SquareButton>
      </PlaylistControlsWrapper>
      <PlaylistControlsWrapper toRight>
        <SquareButton onClick={onSwitchToCurrentTrackMode}>
          <ArrowDownIcon />
        </SquareButton>
      </PlaylistControlsWrapper>
      <PlaylistPopup />
    </>
  );
};
