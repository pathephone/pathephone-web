// @flow strict

import * as React from 'react';
import { Redirect } from 'react-router-dom';

import { HeaderWrapper } from 'components/Header/HeaderWrapper';
import { MenuIcon } from 'icons/round-menu';
import { SearchIcon } from 'icons/round-search';
import { HeaderButton } from 'components/Header/HeaderButton';
import { MainMenuContainer } from 'containers/header/MainMenuContainer';
import { SearchBarContainer } from 'containers/SearchBarContainer';
import { Left } from 'components/Flex/FlexComponents';
import { Right } from 'components/Flex/FlexComponents';
import { routes } from 'data/routes.module';

type TProps = {|
|}

export const HeaderContainer = (props: TProps) => {

  const [ searchValue, setSearchValue ] = React.useState<string>('')
  const [ hasMainMenu, setHasMainMenu ] = React.useState<boolean>(false)
  const [ hasSearchBar, setHasSearchBar ] = React.useState<boolean>(false)

  const toggleMainMenu = () => {
    setHasMainMenu(!hasMainMenu)
  }

  const toggleSearchBar = () => {
    setHasSearchBar(!hasSearchBar)
  }

  const handleSearchSubmit = (value: string) => {
    setSearchValue(value)
  }

  return (
    <HeaderWrapper>
      {
        hasMainMenu && (
          <MainMenuContainer onClose={toggleMainMenu} />
        )
      }
      {
        !hasSearchBar && (
          <>
            <Left>
              <HeaderButton
                onClick={toggleMainMenu}
              >
                <MenuIcon />
              </HeaderButton>
            </Left>
            <Right>
              <HeaderButton 
                onClick={toggleSearchBar}
              >
                <SearchIcon />
              </HeaderButton>
            </Right>
          </>
        )
      }
      {
        hasSearchBar && (
          <SearchBarContainer
            onCancel={toggleSearchBar}
            onSubmit={handleSearchSubmit}
          />
        )
      }
      {
        searchValue && (
          <Redirect to={routes.searchAlbumsRoute(searchValue)} push />
        )
      }
    </HeaderWrapper>
  )
}
