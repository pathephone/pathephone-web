// @flow strict

import * as React from 'react';

import { PlayerScreenWrapper } from 'components/PlayerScreen/PlayerScreenWrapper';
import { HeaderContainer } from 'containers/HeaderContainer';
import { PageContainer } from 'containers/PageContainer';
import { PlaybackControlsContainer } from './PlaybackControlsContainer';

type TProps = {|
|}

export const PlayerScreenContainer = (props: TProps) => {

  return (
    <PlayerScreenWrapper>
      <PageContainer />
      <HeaderContainer />
      <PlaybackControlsContainer />
    </PlayerScreenWrapper>
  )
}
