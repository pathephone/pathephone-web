// @flow strict

import * as React from 'react';

import { HeaderWrapper } from 'components/Header/HeaderWrapper';
import { MenuIcon } from 'icons/round-menu';
import { SearchIcon } from 'icons/round-search';

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
      <button onClick={toggleMainMenu}>
        <MenuIcon />
      </button>
      <button onClick={toggleSearchBar}>
        <SearchIcon />
      </button>
    </HeaderWrapper>
  )
}
