// @flow strict

import * as React from 'react';

import styles from './Album.module.css'

type TProps = {|
  children: React.Node;
|}

export const AlbumWrapper = (props: TProps) => (
  <div className={styles.Album__Wrapper} {...props} />
)