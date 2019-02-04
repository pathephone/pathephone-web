// @flow strict

import * as React from "react";

import styles from "./AlbumsFeed.module.css";

type TProps = {|
  children: React.Node
|};

export const AlbumsFeedWrapper = (props: TProps) => (
  <div className={styles.AlbumsFeed__Wrapper} {...props} />
);
