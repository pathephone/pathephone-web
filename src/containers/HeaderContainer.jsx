// @flow strict

import * as React from "react";
import { Redirect } from "react-router-dom";

import { MenuIcon } from "icons/round-menu";
import { SearchIcon } from "icons/round-search";
import { MainMenuContainer } from "containers/header/MainMenuContainer";
import { SearchBarContainer } from "containers/SearchBarContainer";
import { Left, FlexRow } from "components/Flex/FlexComponents";
import { Right } from "components/Flex/FlexComponents";
import { routes } from "data/routes.module";
import { FixedPanelWrapper } from "components/FixedPanel/FixedPanelComponents";
import { SquareButton } from "components/SquareButton/SquareButtonComponents";

type TProps = {||};

export const HeaderContainer = (props: TProps) => {
  const [searchValue, setSearchValue] = React.useState<string>("");
  const [hasMainMenu, setHasMainMenu] = React.useState<boolean>(false);
  const [hasSearchBar, setHasSearchBar] = React.useState<boolean>(false);

  const toggleMainMenu = () => {
    setHasMainMenu(!hasMainMenu);
  };

  const toggleSearchBar = () => {
    setHasSearchBar(!hasSearchBar);
  };

  const handleSearchSubmit = (value: string) => {
    setSearchValue(value);
  };

  return (
    <FixedPanelWrapper>
      {hasMainMenu && <MainMenuContainer onClose={toggleMainMenu} />}
      {!hasSearchBar && (
        <FlexRow>
          <Left>
            <SquareButton onClick={toggleMainMenu}>
              <MenuIcon />
            </SquareButton>
          </Left>
          <Right>
            <SquareButton onClick={toggleSearchBar}>
              <SearchIcon />
            </SquareButton>
          </Right>
        </FlexRow>
      )}
      {hasSearchBar && (
        <SearchBarContainer
          onCancel={toggleSearchBar}
          onSubmit={handleSearchSubmit}
        />
      )}
      {searchValue && (
        <Redirect to={routes.searchAlbumsRoute(searchValue)} push />
      )}
    </FixedPanelWrapper>
  );
};
