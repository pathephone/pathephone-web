// @flow strict

import * as React from 'react';

import styles from './FeedAlbum.module.css'

type TProps = {|
  src: string;
  alt: string;
|}

export const FeedAlbumCover = ({ src, alt }: TProps) => (
  <img
    className={styles.FeedAlbum__Cover}
    src={src}
    alt={alt}
  />
)