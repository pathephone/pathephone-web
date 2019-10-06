// @flow strict

import * as React from "react";

import { AlbumsFeed } from "view/AlbumsFeed";

type TProps = {|
  children: React.Node,
  testId: string
|};

export const SearchAlbumsPageFeed = ({ children, testId }: TProps) => {
  return <AlbumsFeed testId={testId}>{children}</AlbumsFeed>;
};
