// @flow strict

import * as React from "react";

import styles from "./AlbumsFeed.module.css";

type TProps = {|
  children: React.Node,
  onLoadMore(): void
|};

export const AlbumsFeedWrapper = ({ children, onLoadMore }: TProps) => (
  <div className={styles.AlbumsFeed__Wrapper}>
    <div className={styles.AlbumsFeed__Feed}>{children}</div>
    <button className={styles.AlbumsFeed__LoadMoreButton} onClick={onLoadMore}>
      load more
    </button>
  </div>
);
