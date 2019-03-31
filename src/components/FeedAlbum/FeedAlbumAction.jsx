// @flow strict

import * as React from "react";

import styles from "./FeedAlbum.module.css";

type TProps = {|
  children: React.Node,
  onClick(): void
|};

export const FeedAlbumAction = (props: TProps) => (
  <button className={styles.FeedAlbum__Action}>{props.children}</button>
);
