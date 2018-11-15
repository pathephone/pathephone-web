// @flow strict

import * as React from 'react'

import styles from 'components/AlbumsPage.module.css'
import { SearchBarWrapper } from 'components/SearchBar/SearchBarWrapper';
import { SearchBarInput } from 'components/SearchBar/SearchBarInput';
import { SearchBarCancelButton } from 'components/SearchBar/SearchBarCancelButton';

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
  handleChange = (e: SyntheticEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    this.props.onSearchValueChange(value)
    this.setState({
      value
    })
  }
  handleClearClick = () => {
    this.setState({
      value: ''
    })
  }
  render() {
    const { value } = this.state;
    return(
      <SearchBarWrapper>
        <SearchBarInput
          value={value}
          onChange={this.handleChange}
        />
        <SearchBarCancelButton onClick={this.handleClearClick} />
      </SearchBarWrapper>
    )
  }
}