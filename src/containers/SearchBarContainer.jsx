// @flow strict

import * as React from 'react';

import { SearchBarWrapper } from 'components/SearchBar/SearchBarWrapper';
import { SearchBarInput } from 'components/SearchBar/SearchBarInput';
import { SearchBarCancel } from 'components/SearchBar/SearchBarCancel';
import { ClearIcon } from 'icons/round-clear';

type TProps = {|
  onCancel(): void;
|}

export const SearchBarContainer = (props: TProps) => {

  const { onCancel } = props;

  const [ searchValue, setSearchValue ] = React.useState<string>('')

  const handleInputChange = (e: SyntheticEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setSearchValue(value)
  }

  return (
    <SearchBarWrapper onOutsideClick={onCancel}>
      <SearchBarInput onChange={handleInputChange} value={searchValue} />
      <SearchBarCancel onClick={onCancel}>
        <ClearIcon />
      </SearchBarCancel>
    </SearchBarWrapper>
  )
}
