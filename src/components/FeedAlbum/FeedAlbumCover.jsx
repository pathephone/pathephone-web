// @flow strict

import * as React from "react";

import styles from "./FeedAlbum.module.css";

type TProps = {|
  src: string,
  alt: string
|};

export const FeedAlbumCover = ({ src, alt, onClick }: TProps) => (
  <div className={styles.FeedAlbum__Cover}>
    <img className={styles.FeedAlbum__Image} src={src} alt={alt} />
  </div>
);
