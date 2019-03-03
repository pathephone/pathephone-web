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
import { CustomButton } from "components/CustomButton/CustomButtonComponents";

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
        <CustomButton hasToggledOnIndicator={isShuffle} onClick={handleShuffle}>
          <ShuffleIcon />
        </CustomButton>
        <CustomButton hasToggledOnIndicator={isRepeat} onClick={handleRepeat}>
          <RepeatIcon />
        </CustomButton>
      </PlayerControlsButtonsGroup>
      <PlayerControlsButtonsGroup>
        <CustomButton onClick={handleSkipPrevious}>
          <SkipPreviousIcon />
        </CustomButton>
        <CustomButton onClick={handleSkipNext}>
          <SkipNextIcon />
        </CustomButton>
      </PlayerControlsButtonsGroup>
      <PlayerControlsButtonsGroup moveButtonsToRight>
        <CustomButton onClick={onSwitchToCurrentTrackMode}>
          <ArrowDownIcon />
        </CustomButton>
      </PlayerControlsButtonsGroup>
    </>
  );
};
