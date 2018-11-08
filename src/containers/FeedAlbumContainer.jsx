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

type TProps = {|
  data: TFeedAlbum
|};

export const FeedAlbumContainer = (props: TProps) => {
  const { data } = props;

  const { getPlaylistTracksByAlbumId } = useContextStrict(ServicesContext);
  const { addPlaylistTracks } = useContextStrict(PlayerContext);

  const { title, artistName, coverSrc, id } = data;

  const handleCoverClick = () => {
    getPlaylistTracksByAlbumId(id).then(addPlaylistTracks);
  };

  return (
    <FeedAlbumWrapper>
      <FeedAlbumCover src={coverSrc} alt="" onClick={handleCoverClick} />
      <FeedAlbumInfo>
        <FeedAlbumTitle>{title}</FeedAlbumTitle>
        <FeedAlbumArtist>{artistName}</FeedAlbumArtist>
      </FeedAlbumInfo>
    </FeedAlbumWrapper>
  );
};
