// @flow strict

import * as React from "react";

import { ArrowDownIcon } from "icons/round-keyboard_arrow_down";
import { ShuffleIcon } from "icons/round-shuffle";
import { RepeatIcon } from "icons/round-repeat";
import { SkipPreviousIcon } from "icons/round-skip_previous";
import { SkipNextIcon } from "icons/round-skip_next";
import { useContextStrict } from "hooks/useContextStrict";
import { PlayerContext } from "contexts/PlayerContext";
import { PlayerControlsButtonsGroup } from "components/PlayerControls/PlayerControlsConponents";
import { SquareButton } from "components/SquareButton/SquareButtonComponents";
import { PlaylistPopupContainer } from "./PlaylistPopupContainer";

type TProps = {|
  onSwitchToCurrentTrackMode(): void
|};

export const PlaylistControlsContainer = (props: TProps) => {
  const { onSwitchToCurrentTrackMode } = props;

  const {
    isShuffle,
    isRepeat,
    toggleIsShuffle,
    toggleIsRepeat
  } = useContextStrict(PlayerContext);

  const handleRepeat = () => {
    toggleIsRepeat();
  };

  const handleShuffle = () => {
    toggleIsShuffle();
  };

  const handleSkipNext = () => {};

  const handleSkipPrevious = () => {};

  return (
    <>
      <PlayerControlsButtonsGroup>
        <SquareButton hasToggledOnIndicator={isShuffle} onClick={handleShuffle}>
          <ShuffleIcon />
        </SquareButton>
        <SquareButton hasToggledOnIndicator={isRepeat} onClick={handleRepeat}>
          <RepeatIcon />
        </SquareButton>
      </PlayerControlsButtonsGroup>
      <PlayerControlsButtonsGroup>
        <SquareButton onClick={handleSkipPrevious}>
          <SkipPreviousIcon />
        </SquareButton>
        <SquareButton onClick={handleSkipNext}>
          <SkipNextIcon />
        </SquareButton>
      </PlayerControlsButtonsGroup>
      <PlayerControlsButtonsGroup moveButtonsToRight>
        <SquareButton onClick={onSwitchToCurrentTrackMode}>
          <ArrowDownIcon />
        </SquareButton>
      </PlayerControlsButtonsGroup>
      <PlaylistPopupContainer />
    </>
  );
};
