import { TPlayingTrackScreen } from "type/state";

import React from "react";

import { DeleteIcon } from "view/icon/round-delete";
import { RoundButton } from "view/kit/RoundButton";

import { PlaylistTrackWrapper } from "./styled/PlaylistTrackWrapper";
import { PlaylistTrackButton } from "./styled/PlaylistTrackButton";
import { PlaylistTrackInfo } from "./styled/PlaylistTrackInfo";
import { PlaylistTrackSecondaryAction } from "./styled/PlaylistTrackSecondaryAction";

type TProps = {
  screen: TPlayingTrackScreen;
  artistName: string;
  title: string;
  onPlay(): void;
  onRemove(): void;
};

export const PlaylistTrackView = ({
  screen,
  artistName,
  title,
  onPlay,
  onRemove
}: TProps) => {
  return (
    <PlaylistTrackWrapper playing={screen === "PLAYING"}>
      <PlaylistTrackButton onClick={onPlay}>
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
