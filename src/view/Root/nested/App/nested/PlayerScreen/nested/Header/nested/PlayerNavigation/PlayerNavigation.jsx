// @flow strict

import * as React from "react";

import { routes } from "data/routes";

import { PlayerNavigationPopup } from "./styled/PlayerNavigationPopup";
import { PlayerNavigationLink } from "./styled/PlayerNavigationLink";
import { testId } from "utils/testId";

type TProps = {|
  onClose(): void
|};

export const PlayerNavigation = (props: TProps) => {
  const { onClose } = props;

  return (
    <PlayerNavigationPopup onOutsideClick={onClose}>
      <PlayerNavigationLink
        text="Latest albums"
        onClick={onClose}
        to={routes.latestAlbumsRoute()}
        testId={testId.PLAYER_NAVIGATION__LATEST_ALBUMS_LINK}
      />
      <PlayerNavigationLink
        text="Search albums"
        onClick={onClose}
        to={routes.searchQueriesRoute()}
        testId={testId.PLAYER_NAVIGATION__SEARCH_ALBUMS_LINK}
      />
      <PlayerNavigationLink
        text="Share album"
        onClick={onClose}
        to={routes.shareAlbumRoute()}
        testId={testId.PLAYER_NAVIGATION__SHARE_ALBUM_LINK}
      />
    </PlayerNavigationPopup>
  );
};
