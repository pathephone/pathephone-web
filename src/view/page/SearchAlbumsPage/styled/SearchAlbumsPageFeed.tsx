import * as React from "react";

import { AlbumsFeed } from "view/widget/AlbumsFeed";

type TProps = {
  children: React.ReactNode;
  testId: string;
};

export const SearchAlbumsPageFeed = ({ children, testId }: TProps) => {
  return <AlbumsFeed testId={testId}>{children}</AlbumsFeed>;
};
