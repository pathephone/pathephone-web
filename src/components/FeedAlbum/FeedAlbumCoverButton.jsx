// @flow strict

import * as React from 'react';

import styles from './FeedAlbum.module.css'

type TProps = {|
  children: React.Node;
  onClick(e: SyntheticEvent<HTMLButtonElement>): void;
|}

export const FeedAlbumPlayButton = ({ children, onClick }: TProps) => (
  <button 
    type='button' 
    className={styles.FeedAlbum__PlayButton} 
    onClick={onClick}
  >
    {children}
  </button>
)