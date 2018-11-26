// @flow strict

import * as React from 'react';

import styles from './Album.module.css'

type TProps = {|
  children: React.Node;
  onClick(e: SyntheticEvent<HTMLButtonElement>): void;
|}

export const AlbumCoverButton = ({ children, onClick }: TProps) => (
  <button 
    type='button' 
    className={styles.Album__CoverButton} 
    onClick={onClick}
  >
    {children}
  </button>
)