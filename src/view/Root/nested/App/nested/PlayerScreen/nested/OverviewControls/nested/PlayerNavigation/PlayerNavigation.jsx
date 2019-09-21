// @flow strict

import * as React from "react";

import { routes } from "data/routes";

import { testId } from "utils/testId";
import { useIntlDictionary } from "hooks/useIntl";

import { PlayerNavigationPopup } from "./styled/PlayerNavigationPopup";
import { PlayerNavigationLink } from "./styled/PlayerNavigationLink";

type TProps = {|
  onClose(): void
|};

export const PlayerNavigation = (props: TProps) => {
  const { onClose } = props;

  const { playerNavigation } = useIntlDictionary();

  const {
    latestAlbumsLinkText,
    searchAlbumsLinkText,
    shareAlbumLinkText
  } = playerNavigation;

  return (
    <PlayerNavigationPopup onOutsideClick={onClose}>
      <PlayerNavigationLink
        text={latestAlbumsLinkText}
        onClick={onClose}
        to={routes.latestAlbumsRoute()}
        testId={testId.PLAYER_NAVIGATION__LATEST_ALBUMS_LINK}
      />
      <PlayerNavigationLink
        text={searchAlbumsLinkText}
        onClick={onClose}
        to={routes.searchQueriesRoute()}
        testId={testId.PLAYER_NAVIGATION__SEARCH_ALBUMS_LINK}
      />
      <PlayerNavigationLink
        text={shareAlbumLinkText}
        onClick={onClose}
        to={routes.shareAlbumRoute()}
        testId={testId.PLAYER_NAVIGATION__SHARE_ALBUM_LINK}
      />
    </PlayerNavigationPopup>
  );
};
