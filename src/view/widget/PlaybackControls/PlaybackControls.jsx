// @flow strict

import type { TAudioStatus } from "type/state";

import * as React from "react";

import { useDispatch } from "hook/useDispatch";
import { useAudioStatus } from "hook/usePlayerContext";
import { UnreachableError } from "util/error";

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
