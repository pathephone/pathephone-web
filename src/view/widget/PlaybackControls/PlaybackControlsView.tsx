import { TPlaybackControlsScreen } from "type/state";

import * as React from "react";

import { WarningIcon } from "view/icon/round-warning";
import { PauseIcon } from "view/icon/round-pause";
import { PlayArrowIcon } from "view/icon/round-play-arrow";
import { PlaylistIcon } from "view/icon/round-queue_music";
import { SquareButton } from "view/kit/SquareButton";
import { Spinner } from "view/kit/Spinner";

import { PlaybackControlsInfo } from "./styled/PlaybackControlsInfo";
import { PlaybackControlsGroup } from "./styled/PlaybackControlsGroup";
import { PlaybackControlsWrapper } from "./styled/PlaybackControlsWrapper";

type TProps = {
  screen: TPlaybackControlsScreen;
  title: string;
  artistName: string;
  onPlaybackButtonClick(): void;
  onPlaylistButtonClick(): void;
};

export const PlaybackControlsView = ({
  screen,
  title,
  artistName,
  onPlaybackButtonClick,
  onPlaylistButtonClick
}: TProps) => {
  return (
    <PlaybackControlsWrapper>
      <PlaybackControlsGroup mod="player">
        <SquareButton
          disabled={screen === "PENDING" || screen === "FAILED"}
          onClick={onPlaybackButtonClick}
        >
          {screen === "PLAYING" && <PauseIcon />}
          {screen === "PAUSED" && <PlayArrowIcon />}
          {screen === "FAILED" && <WarningIcon />}
          {screen === "PENDING" && <Spinner />}
        </SquareButton>
      </PlaybackControlsGroup>
      <PlaybackControlsInfo title={title} artistName={artistName} />
      <PlaybackControlsGroup mod="playlist">
        <SquareButton onClick={onPlaylistButtonClick}>
          <PlaylistIcon />
        </SquareButton>
      </PlaybackControlsGroup>
    </PlaybackControlsWrapper>
  );
};
