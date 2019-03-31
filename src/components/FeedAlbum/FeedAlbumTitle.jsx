// @flow strict

import * as React from "react";

import styles from "./FeedAlbum.module.css";

type TProps = {|
  children: string
|};

export const FeedAlbumTitle = (props: TProps) => (
  <div className={styles.FeedAlbum__Title}>{props.children}</div>
);
