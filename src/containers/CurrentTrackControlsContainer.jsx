// @flow strict

import type { TPlaylistTrack } from "types/state";

import * as React from "react";

import { PauseIcon } from "icons/round-pause";
import { PlayArrowIcon } from "icons/round-play-arrow";
import { useContextStrict } from "hooks/useContextStrict";
import { PlayerContext } from "contexts/PlayerContext";
import { PlaylistIcon } from "icons/round-queue_music";
import {
  PlayerControlsTrackInfo,
  PlayerControlsButtonsGroup
} from "components/PlayerControls/PlayerControlsConponents";
import { SquareButton } from "components/SquareButton/SquareButtonComponents";

type TProps = {|
  onSwitchToPlaylistMode(): void,
  playingTrack: TPlaylistTrack
|};

export const CurrentTrackControlsContainer = (props: TProps) => {
  const { onSwitchToPlaylistMode, playingTrack } = props;

  const { title, artistName } = playingTrack;

  const { isPaused, toggleIsPaused } = useContextStrict(PlayerContext);

  return (
    <>
      <PlayerControlsButtonsGroup>
        <SquareButton onClick={toggleIsPaused}>
          {isPaused ? <PauseIcon /> : <PlayArrowIcon />}
        </SquareButton>
      </PlayerControlsButtonsGroup>
      <PlayerControlsTrackInfo title={title} artistName={artistName} />
      <PlayerControlsButtonsGroup>
        <SquareButton onClick={onSwitchToPlaylistMode}>
          <PlaylistIcon />
        </SquareButton>
      </PlayerControlsButtonsGroup>
    </>
  );
};
