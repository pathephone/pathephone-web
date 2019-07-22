// @flow strict

import * as React from "react";

import { PauseIcon } from "icons/round-pause";
import { PlayArrowIcon } from "icons/round-play-arrow";
import { PlaylistIcon } from "icons/round-queue_music";
import { SquareButton } from "view/SquareButton";
import { Spinner } from "view/Spinner";
import { useDispatch } from "hooks/useDispatch";

import { PlaybackControlsInfo } from "./styled/PlaybackControlsInfo";
import { PlaybackControlsGroup } from "./styled/PlaybackControlsGroup";
import { usePlayingTrack } from "./state/usePlayingTrack";
import { usePlayerContext } from "hooks/usePlayerContext";
import { PlaybackControlsWrapper } from "./styled/PlaybackControlsWrapper";

type TProps = {||};

export const PlaybackControls = (props: TProps) => {
  const dispatch = useDispatch();

  const { title, artistName } = usePlayingTrack();

  const { audioStatus } = usePlayerContext();

  const handlePause = React.useCallback(() => {
    dispatch({ type: "PLAYBACK_CONTROLS__PAUSE" });
  }, [dispatch]);

  const handlePlay = React.useCallback(() => {
    dispatch({ type: "PLAYBACK_CONTROLS__PLAY" });
  }, [dispatch]);

  const handleOpenPlaylist = React.useCallback(() => {
    dispatch({ type: "PLAYBACK_CONTROLS__OPEN_PLAYLIST" });
  }, [dispatch]);

  const hasPauseButton = audioStatus === "PLAYING";

  const hasPlayButton = audioStatus === "PAUSED";

  const hasLoader = audioStatus === "WAITING";

  return (
    <PlaybackControlsWrapper>
      <PlaybackControlsGroup mod="player">
        {hasPauseButton && (
          <SquareButton onClick={handlePause}>
            <PauseIcon />
          </SquareButton>
        )}
        {hasPlayButton && (
          <SquareButton onClick={handlePlay}>
            <PlayArrowIcon />
          </SquareButton>
        )}
        {hasLoader && <Spinner />}
      </PlaybackControlsGroup>
      <PlaybackControlsInfo title={title} artistName={artistName} />
      <PlaybackControlsGroup mod="playlist">
        <SquareButton onClick={handleOpenPlaylist}>
          <PlaylistIcon />
        </SquareButton>
      </PlaybackControlsGroup>
    </PlaybackControlsWrapper>
  );
};
