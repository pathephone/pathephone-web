// @flow strict

import * as React from 'react';

import styles from './AlbumsPage.module.css'

type TProps = {|
  children: string;
|}

export const AlbumsPageError = (props: TProps) => (
  <p className={styles.AlbumsPage__Error}>
    {props.children}
  </p>
)