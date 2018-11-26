// @flow strict

import * as React from 'react';

import styles from './Album.module.css'

type TProps = {|
  children: string;
|}

export const AlbumArtistName = (props: TProps) => (
  <h3 className={styles.Album__ArtistName}>
    {props.children}
  </h3>
)