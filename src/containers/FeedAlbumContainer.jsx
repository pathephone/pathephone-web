// @flow strict

import type { TFeedAlbum } from "types/uiDataTypes";

import * as React from 'react';
import { FeedAlbumWrapper } from 'components/FeedAlbum/FeedAlbumWrapper';
import { FeedAlbumCover } from 'components/FeedAlbum/FeedAlbumCover';
import { FeedAlbumTitle } from 'components/FeedAlbum/FeedAlbumTitle';
import { FeedAlbumArtist } from 'components/FeedAlbum/FeedAlbumArtist';
import { FeedAlbumInfo } from 'components/FeedAlbum/FeedAlbumInfo';

type TProps = {|
  data: TFeedAlbum;
|}

export const FeedAlbumContainer = (props: TProps) => {

  const { data } = props;

  const { title, artistName, coverSrc } = data;

  return (
    <FeedAlbumWrapper>
      <FeedAlbumCover src={coverSrc} alt="" />
      <FeedAlbumInfo>
        <FeedAlbumTitle>{title}</FeedAlbumTitle>
        <FeedAlbumArtist>{artistName}</FeedAlbumArtist>
      </FeedAlbumInfo>
    </FeedAlbumWrapper>
  )
}
