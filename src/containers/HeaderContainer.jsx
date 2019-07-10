// @flow strict

import * as React from "react";

import { MenuIcon } from "icons/round-menu";
import { SearchIcon } from "icons/round-search";
import { PlayerNavigationContainer } from "containers/PlayerNavigationContainer";
import { SearchBarContainer } from "containers/SearchBarContainer";
import { Left, FlexRow } from "components/Flex/FlexComponents";
import { Right } from "components/Flex/FlexComponents";
import { FixedPanelWrapper } from "components/FixedPanel/FixedPanelComponents";
import { SquareButton } from "components/SquareButton/SquareButtonComponents";
import { routes } from "data/routes";
import { useRouter } from "hooks/useRouter";

type TProps = {||};

export const HeaderContainer = (props: TProps) => {
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
    <FixedPanelWrapper>
      {hasSearchBar && (
        <SearchBarContainer
          onClose={toggleSearchBar}
          onSubmit={handleSearchSubmit}
        />
      )}
      {!hasSearchBar && (
        <FlexRow>
          <Left>
            <SquareButton onClick={togglePlayerNavigation}>
              <MenuIcon />
            </SquareButton>
            {hasPlayerNavigation && (
              <PlayerNavigationContainer onClose={togglePlayerNavigation} />
            )}
          </Left>
          <Right>
            <SquareButton onClick={toggleSearchBar}>
              <SearchIcon />
            </SquareButton>
          </Right>
        </FlexRow>
      )}
    </FixedPanelWrapper>
  );
};
