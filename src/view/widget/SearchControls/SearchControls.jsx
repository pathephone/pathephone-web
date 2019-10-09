// @flow strict

import * as React from "react";
import { ClearIcon } from "icons/round-clear";

import { testId } from "utils/testId";
import { useKeyUp } from "hooks/useKeyUp";
import { SquareButton } from "view/kit/SquareButton";
import { useDispatch } from "hooks/useDispatch";
import { useRouter } from "hooks/useRouter";

import { SearchControlsWrapper } from "./styled/SearchControlsWrapper";
import { SearchControlsForm } from "./styled/SearchControlsForm";
import { SearchControlsInput } from "./styled/SearchControlsInput";
import { routes } from "data/routes";

type TProps = {||};

export const SearchControls = (props: TProps) => {
  const [searchValue, setSearchValue] = React.useState<string>("");

  const dispatch = useDispatch();

  const { history } = useRouter();

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

      history.push(routes.searchAlbumsRoute(searchValue));

      dispatch({
        type: "SEARCH_CONTROLS__SUBMIT",
        payload: searchValue
      });
    },
    [dispatch, history, searchValue]
  );

  const handleCancel = React.useCallback(() => {
    dispatch({
      type: "SEARCH_CONTROLS__CANCEL"
    });
  }, [dispatch]);

  useKeyUp({
    Escape: handleCancel
  });

  return (
    <SearchControlsWrapper onOutsideClick={handleCancel}>
      <SearchControlsForm onSubmit={handleSubmit}>
        <SearchControlsInput onChange={handleInputChange} value={searchValue} />
      </SearchControlsForm>
      <SquareButton
        testId={testId.SEARCH_BAR__CLEAR_BUTTON}
        onClick={handleCancel}
      >
        <ClearIcon />
      </SquareButton>
    </SearchControlsWrapper>
  );
};
