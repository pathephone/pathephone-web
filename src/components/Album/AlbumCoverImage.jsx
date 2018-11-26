// @flow strict

import * as React from 'react';

import styles from './Album.module.css'

type TProps = {|
  src: string;
  alt: string;
|}

export const AlbumCoverImage = ({ src, alt }: TProps) => (
  <img
    className={styles.Album__CoverImage}
    src={src}
    alt={alt}
  />
)