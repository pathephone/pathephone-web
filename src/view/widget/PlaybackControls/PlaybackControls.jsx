// @flow strict

import type { TAudioStatus } from "types/state";

import * as React from "react";

import { useDispatch } from "hooks/useDispatch";
import { useAudioStatus } from "hooks/usePlayerContext";
import { UnreachableError } from "data/errors";

import { usePlayingTrack } from "./state/usePlayingTrack";
import { PlaybackControlsView } from "./PlaybackControlsView";

type TProps = {||};

export const PlaybackControls = (props: TProps) => {
  const dispatch = useDispatch();

  const { title, artistName } = usePlayingTrack();

  const audioStatus: TAudioStatus = useAudioStatus();

  const onPlaybackButtonClick = React.useCallback(() => {
    if (audioStatus === "PLAYING") {
      dispatch({ type: "PLAYBACK_CONTROLS__PAUSE" });
    }

    if (audioStatus === "PAUSED") {
      dispatch({ type: "PLAYBACK_CONTROLS__PLAY" });
    }
  }, [audioStatus, dispatch]);

  const onPlaylistButtonClick = React.useCallback(() => {
    dispatch({ type: "PLAYBACK_CONTROLS__OPEN_PLAYLIST" });
  }, [dispatch]);

  const screen = (() => {
    switch (audioStatus) {
      case "PLAYING":
        return "PLAYING";
      case "PAUSED":
        return "PAUSED";
      case "PENDING":
        return "PENDING";
      case "FAILED":
        return "FAILED";
      default:
        throw new UnreachableError(audioStatus);
    }
  })();

  const viewProps = {
    screen,
    title,
    artistName,
    onPlaybackButtonClick,
    onPlaylistButtonClick
  };

  return <PlaybackControlsView {...viewProps} />;
};
