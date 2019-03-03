// @flow strict

import type { TPlaylistTrack } from "types/stateTypes";

import * as React from "react";

import { PauseIcon } from "icons/round-pause";
import { PlayArrowIcon } from "icons/round-play-arrow";
import { useContextStrict } from "hooks/useContextStrict";
import { PlayerContext } from "contexts/PlayerContext";
import { PlaylistIcon } from "icons/round-queue_music";
import { FixedPanelButton } from "components/FixedPanel/FixedPanelComponents";
import { PlayerControlsTrackInfo } from "components/PlayerControls/PlayerControlsConponents";

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
      <FixedPanelButton onClick={toggleIsPaused}>
        {isPaused ? <PauseIcon /> : <PlayArrowIcon />}
      </FixedPanelButton>
      <PlayerControlsTrackInfo title={title} artistName={artistName} />
      <FixedPanelButton onClick={onSwitchToPlaylistMode}>
        <PlaylistIcon />
      </FixedPanelButton>
    </>
  );
};
