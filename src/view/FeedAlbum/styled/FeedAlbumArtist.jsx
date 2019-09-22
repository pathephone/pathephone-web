// @flow strict

import * as React from "react";

import styles from "./FeedAlbum.module.css";

type TProps = {|
  children: string
|};

export const FeedAlbumArtist = (props: TProps) => (
  <div className={styles.FeedAlbum__Artist}>{props.children}</div>
);
