// @flow strict

import type { TPlaylistTrack } from "types/state";

import * as React from "react";

import { PauseIcon } from "icons/round-pause";
import { PlayArrowIcon } from "icons/round-play-arrow";
import { useContextStrict } from "hooks/useContextStrict";
import { PlayerContext } from "contexts/PlayerContext";
import { PlaylistIcon } from "icons/round-queue_music";
import { SquareButton } from "view/SquareButton";

import { PlaybackControlsInfo } from "./styled/PlaybackControlsInfo";
import { PlaybackControlsGroup } from "./styled/PlaybackControlsGroup";

type TProps = {|
  onSwitchToPlaylistMode(): void,
  playingTrack: TPlaylistTrack
|};

export const PlaybackControls = (props: TProps) => {
  const { onSwitchToPlaylistMode, playingTrack } = props;

  const { title, artistName } = playingTrack;

  const { isPaused, toggleIsPaused } = useContextStrict(PlayerContext);

  return (
    <>
      <PlaybackControlsGroup>
        <SquareButton onClick={toggleIsPaused}>
          {isPaused ? <PauseIcon /> : <PlayArrowIcon />}
        </SquareButton>
      </PlaybackControlsGroup>
      <PlaybackControlsInfo title={title} artistName={artistName} />
      <PlaybackControlsGroup toRight>
        <SquareButton onClick={onSwitchToPlaylistMode}>
          <PlaylistIcon />
        </SquareButton>
      </PlaybackControlsGroup>
    </>
  );
};
