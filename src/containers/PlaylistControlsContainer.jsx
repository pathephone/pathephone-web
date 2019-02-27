// @flow strict

import * as React from "react";

import { ArrowDownIcon } from "icons/round-keyboard_arrow_down";
import { PlaybackControlsGroup, PlaybackControlsButton } from "components/PlaybackControls/PlaybackControlsConponents";
import { ShuffleIcon } from "icons/round-shuffle";
import { RepeatIcon } from "icons/round-repeat";
import { SkipPreviousIcon } from "icons/round-skip_previous";
import { SkipNextIcon } from "icons/round-skip_next";
import { useContextStrict } from "hooks/useContextStrict";
import { PlayerContext } from "contexts/PlayerContext";

type TProps = {|
  onSwitchToCurrentTrackMode(): void;  
|};

export const PlaylistControlsContainer = (props: TProps) => {

  const {
    onSwitchToCurrentTrackMode
  } = props;

  const {
    playlist,
    playingTrackId
  } = useContextStrict(PlayerContext)

  const handleRepeat = () => {
    // TODO: toggle repeat state
  }

  const handleShuffle = () => {
    // TODO: toggle shuffle state
  }

  const handleSkipNext = () => {

  }

  const handleSkipPrevious = () => {

  }

  return (
    <>
      <PlaybackControlsGroup>
        <PlaybackControlsButton onClick={handleShuffle}>
          <ShuffleIcon />
        </PlaybackControlsButton>
        <PlaybackControlsButton onClick={handleRepeat}>
          <RepeatIcon />
        </PlaybackControlsButton>
      </PlaybackControlsGroup>
      <PlaybackControlsGroup>
        <PlaybackControlsButton onClick={handleSkipPrevious}>
          <SkipPreviousIcon />
        </PlaybackControlsButton>
        <PlaybackControlsButton onClick={handleSkipNext}>
          <SkipNextIcon />
        </PlaybackControlsButton>
      </PlaybackControlsGroup>
      <PlaybackControlsGroup>
        <PlaybackControlsButton onClick={onSwitchToCurrentTrackMode}>
          <ArrowDownIcon />
        </PlaybackControlsButton>
      </PlaybackControlsGroup>
    </>
  );
};
