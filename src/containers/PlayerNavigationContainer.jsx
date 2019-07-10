// @flow strict

import * as React from "react";

import { PlayerNavigationPopup } from "components/PlayerNavigation/PlayerNavigationComponents";
import { PlayerNavigationLink } from "components/PlayerNavigation/PlayerNavigationComponents";
import { OutsideClickDetector } from "components/OutsideClickDetector";
import { routes } from "data/routes";

type TProps = {|
  onClose(): void
|};

export const PlayerNavigationContainer = (props: TProps) => {
  const { onClose } = props;

  return (
    <OutsideClickDetector onOutsideClick={onClose}>
      <PlayerNavigationPopup>
        <PlayerNavigationLink onClick={onClose} to={routes.latestAlbumsRoute()}>
          Latest albums
        </PlayerNavigationLink>
        <PlayerNavigationLink
          onClick={onClose}
          to={routes.searchQueriesRoute()}
        >
          Search albums
        </PlayerNavigationLink>
        <PlayerNavigationLink onClick={onClose} to={routes.shareAlbumRoute()}>
          Share album
        </PlayerNavigationLink>
      </PlayerNavigationPopup>
    </OutsideClickDetector>
  );
};
