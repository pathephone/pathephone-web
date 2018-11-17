// @flow strict

import * as React from 'react'

import styles from 'styles/SearchBar.module.css'

type TProps = {
  onSearchValueChange(nextValue: string): void; 
}

type TState = {
  value: string;
}

export class SearchBar extends React.Component<TProps, TState> {
  state = {
    value: ''
  }
  handleInputChange = (e: SyntheticEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    this.props.onSearchValueChange(value)
    this.setState({
      value
    })
  }
  handleClearButtonClick = () => {
    this.setState({
      value: ''
    })
  }
  render() {
    const { value } = this.state;
    return(
      <div className={styles.SearchBar__Wrapper}>
        <input 
          type="text"
          className={styles.SearchBar__Input} 
          value={value} 
          onChange={this.handleInputChange}
        />
        <button className={styles.SearchBar__ClearButton} onClick={this.handleClearButtonClick}>
          x 
        </button>
      </div>
    )
  }
}