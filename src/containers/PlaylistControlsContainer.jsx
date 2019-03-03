// @flow strict

import * as React from "react";

import { ArrowDownIcon } from "icons/round-keyboard_arrow_down";
import { ShuffleIcon } from "icons/round-shuffle";
import { RepeatIcon } from "icons/round-repeat";
import { SkipPreviousIcon } from "icons/round-skip_previous";
import { SkipNextIcon } from "icons/round-skip_next";
import { useContextStrict } from "hooks/useContextStrict";
import { PlayerContext } from "contexts/PlayerContext";
import { FixedPanelButton } from "components/FixedPanel/FixedPanelComponents";
import { PlayerControlsButtonsGroup } from "components/PlayerControls/PlayerControlsConponents";

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
        <FixedPanelButton
          hasToggledOnIndicator={isShuffle}
          onClick={handleShuffle}
        >
          <ShuffleIcon />
        </FixedPanelButton>
        <FixedPanelButton
          hasToggledOnIndicator={isRepeat}
          onClick={handleRepeat}
        >
          <RepeatIcon />
        </FixedPanelButton>
      </PlayerControlsButtonsGroup>
      <PlayerControlsButtonsGroup>
        <FixedPanelButton onClick={handleSkipPrevious}>
          <SkipPreviousIcon />
        </FixedPanelButton>
        <FixedPanelButton onClick={handleSkipNext}>
          <SkipNextIcon />
        </FixedPanelButton>
      </PlayerControlsButtonsGroup>
      <PlayerControlsButtonsGroup moveButtonsToRight>
        <FixedPanelButton onClick={onSwitchToCurrentTrackMode}>
          <ArrowDownIcon />
        </FixedPanelButton>
      </PlayerControlsButtonsGroup>
    </>
  );
};
