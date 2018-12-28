// @flow strict

import * as React from 'react';

import styles from './FeedAlbum.module.css'

type TProps = {|
  children: string;
|}

export const FeedAlbumTitle = (props: TProps) => (
  <h4 className={styles.FeedAlbum__Title}>
    {props.children}
  </h4>
)