// @flow strict

import * as React from "react";

import { routes } from "util/route";

import { testId } from "util/testId";
import { useIntlDictionary } from "hook/useIntl";

import { PlayerNavigationPopup } from "./styled/PlayerNavigationPopup";
import { PlayerNavigationLink } from "./styled/PlayerNavigationLink";

type TProps = {|
  onClose(): void
|};

export const PlayerNavigation = (props: TProps) => {
  const { onClose } = props;

  const { playerNavigation } = useIntlDictionary();

  const { latestAlbumsLinkText, shareAlbumLinkText } = playerNavigation;

  return (
    <PlayerNavigationPopup onOutsideClick={onClose}>
      <PlayerNavigationLink
        text={latestAlbumsLinkText}
        onClick={onClose}
        to={routes.latestAlbumsRoute()}
        testId={testId.PLAYER_NAVIGATION__LATEST_ALBUMS_LINK}
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
