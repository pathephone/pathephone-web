// @flow strict

import * as React from 'react';

import styles from './Album.module.css'

type TProps = {|
  children: string;
|}

export const AlbumTitle = (props: TProps) => (
  <h2 className={styles.Album__Title}>
    {props.children}
  </h2>
)