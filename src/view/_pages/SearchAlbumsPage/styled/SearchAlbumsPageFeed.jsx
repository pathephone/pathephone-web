// @flow strict

import * as React from "react";

import { testId } from "utils/testId";

import { AlbumsFeed } from "view/AlbumsFeed/index";

type TProps = {
  children: React.Node
};

export const SearchAlbumsPageFeed = ({ children }: TProps) => {
  return (
    <AlbumsFeed testId={testId.SEARCH_ALBUMS_PAGE__FEED}>{children}</AlbumsFeed>
  );
};
