// @flow strict

import * as React from "react";

import styles from "./FeedAlbum.module.css";

type TProps = {|
  children: React.Node
|};

export const FeedAlbumActions = (props: TProps) => (
  <div className={styles.FeedAlbum__Actions}>{props.children}</div>
);
