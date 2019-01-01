// @flow strict

import * as React from 'react';

import { HeaderWrapper } from 'components/Header/HeaderWrapper';
import { MenuIcon } from 'icons/round-menu';
import { SearchIcon } from 'icons/round-search';
import { HeaderButton } from 'components/Header/HeaderButton';
import { MainMenuContainer } from 'containers/header/MainMenuContainer';
import { SearchBarContainer } from 'containers/SearchBarContainer';
import { OutsideClickDetector } from 'components/OutsideClickDetector';

type TProps = {|
|}

export const HeaderContainer = (props: TProps) => {

  const [ hasMainMenu, setHasMainMenu ] = React.useState<boolean>(false)
  const [ hasSearchBar, setHasSearchBar ] = React.useState<boolean>(false)

  const toggleMainMenu = () => {
    setHasMainMenu(!hasMainMenu)
  }

  const toggleSearchBar = () => {
    setHasSearchBar(!hasSearchBar)
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
            <HeaderButton isDisabled={hasMainMenu} onClick={toggleMainMenu}>
              <MenuIcon />
            </HeaderButton>
            <HeaderButton isDisabled={hasSearchBar} onClick={toggleSearchBar}>
              <SearchIcon />
            </HeaderButton>
          </>
        )
      }
      {
        hasSearchBar && (
          <SearchBarContainer
            onCancel={toggleSearchBar}
          />
        )
      }
    </HeaderWrapper>
  )
}
