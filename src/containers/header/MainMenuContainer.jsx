// @flow strict

import * as React from "react";

import { routes } from "data/routes.module";
import { MainMenuNavigation } from "components/MainMenu/MainMenuComponents";
import { MainMenuLink } from "components/MainMenu/MainMenuComponents";
import { MainMenuCloseButton } from "components/MainMenu/MainMenuComponents";
import { MainMenuWrapper } from "components/MainMenu/MainMenuComponents";

type TProps = {|
  onClose(): void
|};

export const MainMenuContainer = (props: TProps) => {
  const { onClose } = props;

  const DecoratedLink = ({ children, to }) => (
    <MainMenuLink onClick={onClose} to={to}>
      {children}
    </MainMenuLink>
  );

  return (
    <MainMenuWrapper onOutsideClick={onClose}>
      <MainMenuCloseButton onClick={onClose}>close</MainMenuCloseButton>
      <MainMenuNavigation>
        <DecoratedLink to={routes.latestAlbumsRoute()}>
          latest albums
        </DecoratedLink>
        <DecoratedLink to={routes.searchAlbumsRoute()}>
          search albums
        </DecoratedLink>
        <DecoratedLink to={routes.shareAlbumRoute()}>share album</DecoratedLink>
      </MainMenuNavigation>
    </MainMenuWrapper>
  );
};
