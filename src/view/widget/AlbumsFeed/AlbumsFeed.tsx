import * as React from "react";

import { AlbumsFeedWrapper } from "./styled/AlbumsFeedWrapper";
import { AlbumsFeedButton } from "./styled/AlbumsFeedButton";
import { AlbumsFeedContent } from "./styled/AlbumsFeedContent";

type TProps = {
  children: React.ReactNode;
  testId?: string;
  onLoadMore?: () => void;
};

export const AlbumsFeed = ({ children, testId, onLoadMore }: TProps) => (
  <AlbumsFeedWrapper testId={testId}>
    <AlbumsFeedContent>{children}</AlbumsFeedContent>
    {onLoadMore && <AlbumsFeedButton onClick={onLoadMore} text="load more" />}
  </AlbumsFeedWrapper>
);
