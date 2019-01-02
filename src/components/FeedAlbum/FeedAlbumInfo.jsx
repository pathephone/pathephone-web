// @flow strict

import * as React from 'react';

import styles from './FeedAlbum.module.css'

type TProps = {|
  children: React.Node;
|}

export const FeedAlbumInfo = (props: TProps) => (
  <div className={styles.FeedAlbum__Info}>
    {props.children}
  </div>
)