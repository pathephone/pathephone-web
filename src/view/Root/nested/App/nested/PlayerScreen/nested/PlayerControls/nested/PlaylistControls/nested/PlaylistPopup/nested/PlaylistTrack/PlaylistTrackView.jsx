// @flow strict

import React from "react";

import { DeleteIcon } from "icons/round-delete";
import { RoundButton } from "view/RoundButton";

import { PlaylistTrackWrapper } from "./styled/PlaylistTrackWrapper";
import { PlaylistTrackButton } from "./styled/PlaylistTrackButton";
import { PlaylistTrackCachingIndicator } from "./styled/PlaylistTrackCachingIndicator";
import { PlaylistTrackInfo } from "./styled/PlaylistTrackInfo";
import { PlaylistTrackSecondaryAction } from "./styled/PlaylistTrackSecondaryAction";

type TProps = {|
  artistName: string,
  title: string,
  hasPlayingScreen: boolean,
  hasCachingScreen: boolean,
  onPlay(): void,
  onRemove(): void
|};

export const PlaylistTrackView = ({
  artistName,
  title,
  hasPlayingScreen,
  hasCachingScreen,
  onPlay,
  onRemove
}: TProps) => {
  return (
    <PlaylistTrackWrapper playing={hasPlayingScreen}>
      <PlaylistTrackButton disabled={hasCachingScreen} onClick={onPlay}>
        {hasCachingScreen && <PlaylistTrackCachingIndicator />}
        <PlaylistTrackInfo title={title} artistName={artistName} />
      </PlaylistTrackButton>
      <PlaylistTrackSecondaryAction>
        <RoundButton onClick={onRemove}>
          <DeleteIcon />
        </RoundButton>
      </PlaylistTrackSecondaryAction>
    </PlaylistTrackWrapper>
  );
};
