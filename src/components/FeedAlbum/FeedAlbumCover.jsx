// @flow strict

import * as React from "react";

import styles from "./FeedAlbum.module.css";

type TProps = {|
  src: string,
  alt: string,
  onClick(): void
|};

export const FeedAlbumCover = ({ src, alt, onClick }: TProps) => (
  <img
    className={styles.FeedAlbum__Cover}
    src={src}
    alt={alt}
    onClick={onClick}
  />
);
