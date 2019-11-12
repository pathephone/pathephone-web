import { AlbumPreview } from "type/model";

import * as React from "react";

import { AlbumCover } from "view/widget/AlbumCover";
import { useDispatch } from "hook/useDispatch";

import { FeedAlbumWrapper } from "./styled/FeedAlbumWrapper";
import { FeedAlbumInfo } from "./styled/FeedAlbumInfo";
import { FeedAlbumTitle } from "./styled/FeedAlbumTitle";
import { FeedAlbumArtist } from "./styled/FeedAlbumArtist";

type TProps = {
  data: AlbumPreview;
};

export const FeedAlbum = (props: TProps) => {
  const { data } = props;

  const dispatch = useDispatch();

  const { title, artistName, coverSrc, id } = data;

  const handleAddAlbumToPlaylist = React.useCallback(() => {
    dispatch({
      type: "FEED_ALBUM__ADD_TO_PLAYLIST",
      payload: id
    });
  }, [dispatch, id]);

  const handlePlayAlbum = React.useCallback(() => {
    dispatch({
      type: "FEED_ALBUM__PLAY",
      payload: id
    });
  }, [dispatch, id]);

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
