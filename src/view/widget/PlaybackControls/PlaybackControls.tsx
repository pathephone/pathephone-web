import { AudioStatus, PlaybackControlsScreen } from "type/state";

import * as React from "react";

import { useDispatch } from "hook/useDispatch";
import { usePlayingTrackStrict } from "hook/usePlayingTrack";
import { useAudioStatus } from "hook/useAudioStatus";
import { UnreachableError } from "util/error";

import { PlaybackControlsView } from "./PlaybackControlsView";

export const PlaybackControls = () => {
  const dispatch = useDispatch();

  const { title, artistName } = usePlayingTrackStrict();

  const audioStatus: AudioStatus = useAudioStatus();

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

  const screen: PlaybackControlsScreen = (() => {
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
