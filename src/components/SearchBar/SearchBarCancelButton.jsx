// @flow strict

import * as React from 'react'

import styles from 'styles/SearchBar.module.css'

type TProps = {
  onClick(e: SyntheticEvent<HTMLButtonElement>): void;
}

export const SearchBarCancelButton = ({ onClick }: TProps) => (
  <button className={styles.SearchBar__CancelButton} onClick={onClick}>
    x 
  </button>
)