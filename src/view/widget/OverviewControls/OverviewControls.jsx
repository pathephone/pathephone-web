// @flow strict

import * as React from "react";
import { MenuIcon } from "icons/round-menu";
import { SearchIcon } from "icons/round-search";

import { SquareButton } from "view/kit/SquareButton";
import { PlayerNavigation } from "view/widget/PlayerNavigation";
import { testId } from "utils/testId";
import { useDispatch } from "hooks/useDispatch";

import { OverviewControlsWrapper } from "./styled/OverviewControlsWrapper";
import { OverviewControlsGroup } from "./styled/OverviewControlsGroup";

type TProps = {||};

export const OverviewControls = (props: TProps) => {
  const [hasPlayerNavigation, setHasPlayerNavigation] = React.useState(false);

  const dispatch = useDispatch();

  const handleOpenNavigation = React.useCallback(() => {
    setHasPlayerNavigation(true);
  }, []);

  const handleCloseNavigation = React.useCallback(() => {
    setHasPlayerNavigation(false);
  }, []);

  const handleOpenSearch = React.useCallback(() => {
    dispatch({
      type: "OVERVIEW_CONTROLS__OPEN_SEARCH"
    });
  }, [dispatch]);

  return (
    <OverviewControlsWrapper>
      <OverviewControlsGroup mod="nav">
        <SquareButton
          testId={testId.HEADER__NAVIGATION_BUTTON}
          onClick={handleOpenNavigation}
        >
          <MenuIcon />
        </SquareButton>
        {hasPlayerNavigation && (
          <PlayerNavigation onClose={handleCloseNavigation} />
        )}
      </OverviewControlsGroup>
      <OverviewControlsGroup mod="search">
        <SquareButton
          testId={testId.HEADER__SEARCH_BUTTON}
          onClick={handleOpenSearch}
        >
          <SearchIcon />
        </SquareButton>
      </OverviewControlsGroup>
    </OverviewControlsWrapper>
  );
};
