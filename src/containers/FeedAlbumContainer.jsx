// @flow strict

import type { TFeedAlbum } from "types/state";

import * as React from "react";

import { FeedAlbumWrapper } from "components/FeedAlbum/FeedAlbumWrapper";
import { FeedAlbumTitle } from "components/FeedAlbum/FeedAlbumTitle";
import { FeedAlbumArtist } from "components/FeedAlbum/FeedAlbumArtist";
import { FeedAlbumInfo } from "components/FeedAlbum/FeedAlbumInfo";
import { useContextStrict } from "hooks/useContextStrict";
import { PlayerContext } from "contexts/PlayerContext";
import { useServices } from "hooks/useServices";
import { AlbumCover } from "components/AlbumCover/index";

type TProps = {|
  data: TFeedAlbum
|};

export const FeedAlbumContainer = (props: TProps) => {
  const { data } = props;

  const { getPlaylistTracksByAlbumId } = useServices();

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
      <AlbumCover
        imageSrc={coverSrc}
        onAddToPlaylist={handleAddAlbumToPlaylist}
        onPlay={handlePlayAlbum}
      />
      <FeedAlbumInfo>
        <FeedAlbumTitle>{title}</FeedAlbumTitle>
        <FeedAlbumArtist>{artistName}</FeedAlbumArtist>
      </FeedAlbumInfo>
    </FeedAlbumWrapper>
  );
};
