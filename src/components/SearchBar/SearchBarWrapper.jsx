// @flow strict

import * as React from 'react'

import styles from 'styles/SearchBar.module.css'

type TProps = {
  children: React.Node;
}

export const SearchBarWrapper = ({ children }: TProps) => (
  <div className={styles.SearchBarWrapper}>
    {children} 
  </div>
)