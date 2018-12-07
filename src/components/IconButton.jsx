// @flow strict

import * as React from 'react';

import styles from './IconButton.module.css'

type TProps = {|
  children: React.Node;
  onClick(e: SyntheticEvent<HTMLButtonElement>): void; 
|}

export const IconButton = (props: TProps) => (
  <button className={styles.IconButton} {...props} />
)