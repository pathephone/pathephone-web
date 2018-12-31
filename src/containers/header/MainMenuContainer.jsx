// @flow strict

import * as React from 'react';

import { routes } from 'data/routes.module';
import { MainMenuWrapper } from 'components/MainMenu/MainMenuComponents';
import { MainMenuNavigation } from 'components/MainMenu/MainMenuComponents';
import { MainMenuLink } from 'components/MainMenu/MainMenuComponents';
import { MainMenuCloseButton } from 'components/MainMenu/MainMenuComponents';

type TProps = {|
  onClose(): void;
|}

export const MainMenuContainer = (props: TProps) => {

  return (
    <MainMenuWrapper>
      <MainMenuCloseButton onClick={props.onClose}>
        close
      </MainMenuCloseButton>
      <MainMenuNavigation>
        <MainMenuLink to={routes.latestAlbumsRoute()}>
          latest albums
        </MainMenuLink>
        <MainMenuLink to={routes.searchAlbumsRoute()}>
          search albums
        </MainMenuLink>
        <MainMenuLink to={routes.shareAlbumRoute()}>
          share album
        </MainMenuLink>
      </MainMenuNavigation>
    </MainMenuWrapper>
  )
}
