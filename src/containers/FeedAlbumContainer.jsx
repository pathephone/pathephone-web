// @flow strict

import type { TFeedAlbum } from "types/stateTypes";

import * as React from "react";

import { FeedAlbumWrapper } from "components/FeedAlbum/FeedAlbumWrapper";
import { FeedAlbumCover } from "components/FeedAlbum/FeedAlbumCover";
import { FeedAlbumTitle } from "components/FeedAlbum/FeedAlbumTitle";
import { FeedAlbumArtist } from "components/FeedAlbum/FeedAlbumArtist";
import { FeedAlbumInfo } from "components/FeedAlbum/FeedAlbumInfo";
import { useContextStrict } from "hooks/useContextStrict";
import { ServicesContext } from "contexts/ServicesContext";
import { PlayerContext } from "contexts/PlayerContext";
import { PlayArrowIcon } from "icons/round-play-arrow";
import { PlaylistAddIcon } from "icons/round-playlist_add";
import { FeedAlbumActions } from "components/FeedAlbum/FeedAlbumActions";
import { FeedAlbumAction } from "components/FeedAlbum/FeedAlbumAction";

type TProps = {|
  data: TFeedAlbum
|};

export const FeedAlbumContainer = (props: TProps) => {
  const { data } = props;

  const { getPlaylistTracksByAlbumId } = useContextStrict(ServicesContext);
  const {
    addPlaylistTracks,
    clearPlaylist,
    setPlayingTrackId
  } = useContextStrict(PlayerContext);

  const { title, artistName, coverSrc, id } = data;

  const handleAddAlbumToPlaylist = () => {
    getPlaylistTracksByAlbumId(id).then(addPlaylistTracks);
  };

  const handlePlayAlbum = () => {
    clearPlaylist();
    getPlaylistTracksByAlbumId(id).then(tracks => {
      addPlaylistTracks(tracks);
      setPlayingTrackId(tracks[0].id);
    });
  };

  return (
    <FeedAlbumWrapper>
      <FeedAlbumCover src={coverSrc} alt="album cover" />
      <FeedAlbumActions>
        <FeedAlbumAction onClick={handleAddAlbumToPlaylist}>
          <PlaylistAddIcon />
        </FeedAlbumAction>
        <FeedAlbumAction onClick={handlePlayAlbum}>
          <PlayArrowIcon />
        </FeedAlbumAction>
      </FeedAlbumActions>
      <FeedAlbumInfo>
        <FeedAlbumTitle>{title}</FeedAlbumTitle>
        <FeedAlbumArtist>{artistName}</FeedAlbumArtist>
      </FeedAlbumInfo>
    </FeedAlbumWrapper>
  );
};
