// @flow strict

import * as React from "react";

import { routes } from "data/routes.module";
import { PlayerNavigationPopup } from "components/PlayerNavigation/PlayerNavigationComponents";
import { PlayerNavigationLink } from "components/PlayerNavigation/PlayerNavigationComponents";
import { OutsideClickDetector } from "components/OutsideClickDetector";

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
        <PlayerNavigationLink onClick={onClose} to={routes.searchAlbumsRoute()}>
          Search albums
        </PlayerNavigationLink>
        <PlayerNavigationLink onClick={onClose} to={routes.shareAlbumRoute()}>
          Share album
        </PlayerNavigationLink>
      </PlayerNavigationPopup>
    </OutsideClickDetector>
  );
};
