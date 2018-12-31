// @flow strict

import * as React from 'react';

import styles from './SearchBar.module.css'

type TProps = {|
  children: React.Node;
|}

export const SearchBarWrapper = (props: TProps) => (
  <div className={styles.SearchBar__Wrapper} {...props} />
)