// @flow strict

import * as React from "react";
import { ClearIcon } from "icons/round-clear";

import { testId } from "utils/testId";
import { useKeyUp } from "hooks/useKeyUp";
import { SquareButton } from "view/SquareButton";

import { SearchBarWrapper } from "./styled/SearchBarWrapper";
import { SearchBarForm } from "./styled/SearchBarForm";
import { SearchBarInput } from "./styled/SearchBarInput";

type TProps = {|
  onClose(): void,
  onSubmit(value: string): void
|};

export const SearchBar = (props: TProps) => {
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
      <SquareButton testId={testId.SEARCH_BAR__CLEAR_BUTTON} onClick={onClose}>
        <ClearIcon />
      </SquareButton>
    </SearchBarWrapper>
  );
};
