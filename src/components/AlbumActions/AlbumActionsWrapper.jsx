// @flow strict

import * as React from 'react';

import styles from './AlbumActions.module.css';

type TProps = {|
  children: React.Node;
|}

export const AlbumActionsWrapper = (props: TProps) => (
  <div className={styles.AlbumActions__Wrapper} {...props} />
);
