// @flow strict

import * as React from 'react'

import styles from 'styles/SearchBar.module.css'
import { useCallback } from 'hooks/useCallback';

type TProps = {
  searchValue: string;
  onSearchValueChange(nextValue: string): void; 
}

export const SearchBar = ({ searchValue, onSearchValueChange }: TProps) => {

  const handleInputChange = useCallback((e: SyntheticEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    onSearchValueChange(value)
  })

  const handleClearButtonClick = useCallback(() => {
    onSearchValueChange('')
  })

  return(
    <div className={styles.SearchBar__Wrapper}>
      <input 
        type="text"
        className={styles.SearchBar__Input} 
        value={searchValue} 
        onChange={handleInputChange}
      />
      <button className={styles.SearchBar__ClearButton} onClick={handleClearButtonClick}>
        x 
      </button>
    </div>
  )
}