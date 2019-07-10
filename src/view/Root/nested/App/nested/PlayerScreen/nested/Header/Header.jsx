// @flow strict

import * as React from "react";
import { MenuIcon } from "icons/round-menu";
import { SearchIcon } from "icons/round-search";

import { SquareButton } from "view/SquareButton";
import { routes } from "data/routes";
import { useRouter } from "hooks/useRouter";

import { SearchBar } from "./nested/SearchBar";
import { PlayerNavigation } from "./nested/PlayerNavigation";
import { HeaderWrapper } from "./styled/HeaderWrapper";
import { testId } from "utils/testId";

type TProps = {||};

export const Header = (props: TProps) => {
  const [hasPlayerNavigation, setHasPlayerNavigation] = React.useState<boolean>(
    false
  );
  const [hasSearchBar, setHasSearchBar] = React.useState<boolean>(false);

  const { history } = useRouter();

  const togglePlayerNavigation = React.useCallback(() => {
    setHasPlayerNavigation(prevValue => !prevValue);
  }, []);

  const toggleSearchBar = React.useCallback(() => {
    setHasSearchBar(prevValue => !prevValue);
  }, []);

  const handleSearchSubmit = React.useCallback(
    (value: string) => {
      history.push(routes.searchQueryRoute(value));
    },
    [history]
  );

  React.useEffect(() => {
    if (hasSearchBar) {
      setHasPlayerNavigation(false);
    }
  }, [hasSearchBar]);

  return (
    <HeaderWrapper mod="panel">
      {hasSearchBar && (
        <SearchBar onClose={toggleSearchBar} onSubmit={handleSearchSubmit} />
      )}
      {!hasSearchBar && (
        <HeaderWrapper mod="content">
          <HeaderWrapper mod="nav-group">
            <SquareButton
              testId={testId.HEADER__NAVIGATION_BUTTON}
              onClick={togglePlayerNavigation}
            >
              <MenuIcon />
            </SquareButton>
            {hasPlayerNavigation && (
              <PlayerNavigation onClose={togglePlayerNavigation} />
            )}
          </HeaderWrapper>
          <HeaderWrapper mod="search-group">
            <SquareButton
              testId={testId.HEADER__SEARCH_BUTTON}
              onClick={toggleSearchBar}
            >
              <SearchIcon />
            </SquareButton>
          </HeaderWrapper>
        </HeaderWrapper>
      )}
    </HeaderWrapper>
  );
};
