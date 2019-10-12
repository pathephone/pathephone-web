// @flow strict

import type { TFeedAlbum } from "type/state";

import * as React from "react";

import { AlbumCover } from "view/widget/AlbumCover";

import { FeedAlbumWrapper } from "./styled/FeedAlbumWrapper";
import { FeedAlbumInfo } from "./styled/FeedAlbumInfo";
import { FeedAlbumTitle } from "./styled/FeedAlbumTitle";
import { FeedAlbumArtist } from "./styled/FeedAlbumArtist";
import { useDispatch } from "hook/useDispatch";
import { useServices } from "hook/useServices";

type TProps = {|
  data: TFeedAlbum
|};

export const FeedAlbum = (props: TProps) => {
  const { data } = props;

  const dispatch = useDispatch();

  const { getPlaylistTracksByAlbumId } = useServices();

  const { title, artistName, coverSrc, id } = data;

  const handleAddAlbumToPlaylist = React.useCallback(() => {
    getPlaylistTracksByAlbumId(id).then(tracks => {
      dispatch({
        type: "FEED_ALBUM__ADD_TO_PLAYLIST",
        payload: tracks
      });
    });
  }, [dispatch, getPlaylistTracksByAlbumId, id]);

  const handlePlayAlbum = React.useCallback(() => {
    getPlaylistTracksByAlbumId(id).then(tracks => {
      dispatch({
        type: "FEED_ALBUM__PLAY",
        payload: tracks
      });
    });
  }, [dispatch, getPlaylistTracksByAlbumId, id]);

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
