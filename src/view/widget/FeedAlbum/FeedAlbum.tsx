import { AlbumPreview } from "type/model";

import * as React from "react";

import { AlbumCover } from "view/widget/AlbumCover";

import { FeedAlbumWrapper } from "./styled/FeedAlbumWrapper";
import { FeedAlbumInfo } from "./styled/FeedAlbumInfo";
import { FeedAlbumTitle } from "./styled/FeedAlbumTitle";
import { FeedAlbumArtist } from "./styled/FeedAlbumArtist";
import { useDispatch } from "hook/useDispatch";
import { useService } from "hook/useService";

type TProps = {
  data: AlbumPreview;
};

export const FeedAlbum = (props: TProps) => {
  const { data } = props;

  const dispatch = useDispatch();

  const { getTrackPreviewsByAlbumId } = useService();

  const { title, artistName, coverSrc, id } = data;

  const handleAddAlbumToPlaylist = React.useCallback(() => {
    getTrackPreviewsByAlbumId(id).then(tracks => {
      dispatch({
        type: "FEED_ALBUM__ADD_TO_PLAYLIST",
        payload: tracks
      });
    });
  }, [dispatch, getTrackPreviewsByAlbumId, id]);

  const handlePlayAlbum = React.useCallback(() => {
    getTrackPreviewsByAlbumId(id).then(tracks => {
      dispatch({
        type: "FEED_ALBUM__PLAY",
        payload: tracks
      });
    });
  }, [dispatch, getTrackPreviewsByAlbumId, id]);

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
