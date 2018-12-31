// @flow strict

import * as React from 'react';

import styles from './SearchBar.module.css'

type TProps = {|
  onChange(e: SyntheticEvent<HTMLInputElement>): void;
  value: string;
|}

export const SearchBarInput = (props: TProps) => (
  <input {...props} type="text" autoFocus className={styles.SearchBar__Input} />
)