// @flow strict

import React from "react";

import { PlayArrowIcon as PlayIcon } from "view/icon/round-play-arrow";
import { PlaylistAddIcon as AddToPlaylistIcon } from "view/icon/round-playlist_add";

import { AlbumCoverWrapper } from "./styled/AlbumCoverWrapper";
import { AlbumCoverImage } from "./styled/AlbumCoverImage";
import { AlbumCoverActions } from "./styled/AlbumCoverActions";
import { AlbumCoverButton } from "./styled/AlbumCoverButton";

type TProps = {|
  imageSrc: string,
  onAddToPlaylist(): void,
  onPlay(): void
|};

export const AlbumCover = (props: TProps) => {
  const { imageSrc, onAddToPlaylist, onPlay } = props;

  return (
    <AlbumCoverWrapper>
      <AlbumCoverImage src={imageSrc} />
      <AlbumCoverActions>
        <AlbumCoverButton onClick={onAddToPlaylist}>
          <AddToPlaylistIcon />
        </AlbumCoverButton>
        <AlbumCoverButton onClick={onPlay}>
          <PlayIcon />
        </AlbumCoverButton>
      </AlbumCoverActions>
    </AlbumCoverWrapper>
  );
};
