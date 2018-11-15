// @flow strict

import * as React from 'react'

import styles from 'styles/SearchBar.module.css'

type TProps = {
  onChange(e: SyntheticEvent<HTMLInputElement>): void;
  value: string;
}

export const SearchBarInput = ({ onChange, value }: TProps) => (
  <input 
    type="text"
    className={styles.SearchBar__Input} 
    value={value} 
    onChange={onChange}
  />
)