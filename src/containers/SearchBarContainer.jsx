// @flow strict

import * as React from 'react';

import { SearchBarWrapper } from 'components/SearchBar/SearchBarWrapper';
import { SearchBarInput } from 'components/SearchBar/SearchBarInput';
import { SearchBarCancel } from 'components/SearchBar/SearchBarCancel';
import { ClearIcon } from 'icons/round-clear';
import { SearchBarForm } from 'components/SearchBar/SearchBarForm';

type TProps = {|
  onCancel(): void;
  onSubmit(value: string): void;
|}

export const SearchBarContainer = (props: TProps) => {

  const { onCancel, onSubmit } = props;

  const [ searchValue, setSearchValue ] = React.useState<string>('')

  const handleInputChange = (e: SyntheticEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setSearchValue(value);
  }

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(searchValue);
    onCancel();
  }

  return (
    <SearchBarWrapper onOutsideClick={onCancel}>
      <SearchBarForm onSubmit={handleSubmit}>
        <SearchBarInput onChange={handleInputChange} value={searchValue} />
      </SearchBarForm>
      <SearchBarCancel onClick={onCancel}>
        <ClearIcon />
      </SearchBarCancel>
    </SearchBarWrapper>
  )
}
