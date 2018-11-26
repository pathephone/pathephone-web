// @flow strict

import * as React from 'react';

import styles from './AlbumActions.module.css'

type TProps = {|
|}

export const AlbumActionsLoader = (props: TProps) => (
  <div className={styles.AlbumActions__Loader} {...props} />
)