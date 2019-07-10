// @flow strict

import * as React from "react";

import { SearchBarWrapper } from "components/SearchBar/SearchBarWrapper";
import { SearchBarInput } from "components/SearchBar/SearchBarInput";
import { ClearIcon } from "icons/round-clear";
import { SearchBarForm } from "components/SearchBar/SearchBarForm";
import { useKeyUp } from "hooks/useKeyUp";
import { SquareButton } from "components/SquareButton/SquareButtonComponents";

type TProps = {|
  onClose(): void,
  onSubmit(value: string): void
|};

export const SearchBarContainer = (props: TProps) => {
  const { onClose, onSubmit } = props;

  const [searchValue, setSearchValue] = React.useState<string>("");

  const handleInputChange = React.useCallback(
    (e: SyntheticEvent<HTMLInputElement>) => {
      const { value } = e.currentTarget;
      setSearchValue(value);
    },
    []
  );

  const handleSubmit = React.useCallback(
    (e: SyntheticEvent<HTMLFormElement>) => {
      e.preventDefault();
      onSubmit(searchValue);
      onClose();
    },
    [onClose, onSubmit, searchValue]
  );

  useKeyUp({
    Escape: onClose
  });

  return (
    <SearchBarWrapper onOutsideClick={onClose}>
      <SearchBarForm onSubmit={handleSubmit}>
        <SearchBarInput onChange={handleInputChange} value={searchValue} />
      </SearchBarForm>
      <SquareButton onClick={onClose}>
        <ClearIcon />
      </SquareButton>
    </SearchBarWrapper>
  );
};
