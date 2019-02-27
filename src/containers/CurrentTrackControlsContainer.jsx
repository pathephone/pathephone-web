// @flow strict

import type { TPlaylistTrack } from 'types/stateTypes'

import * as React from "react";

import { PauseIcon } from "icons/round-pause";
import { PlayArrowIcon } from "icons/round-play-arrow";
import { useContextStrict } from "hooks/useContextStrict";
import { PlayerContext } from "contexts/PlayerContext";
import { PlaylistIcon } from "icons/round-queue_music";
import { PlaybackControlsButton, PlaybackControlsTrackInfo } from "components/PlaybackControls/PlaybackControlsConponents";

type TProps = {|
  onSwitchToPlaylistMode(): void;
playingTrack: TPlaylistTrack;
|};

export const CurrentTrackControlsContainer = (props: TProps) => {

  const {
    onSwitchToPlaylistMode,
    playingTrack
  } = props;

  const {
    title, artistName
  } = playingTrack;

  const {
    isPaused,
    toggleIsPaused
  } = useContextStrict(PlayerContext)

  return (
    <>
      <PlaybackControlsButton onClick={toggleIsPaused}>
        {
          isPaused ? (
            <PauseIcon />
          ) : (
              <PlayArrowIcon />
            )
        }
      </PlaybackControlsButton>
      <PlaybackControlsTrackInfo
        title={title}
        artistName={artistName}
      />
      <PlaybackControlsButton onClick={onSwitchToPlaylistMode}>
        <PlaylistIcon />
      </PlaybackControlsButton>
    </>
  );
};
