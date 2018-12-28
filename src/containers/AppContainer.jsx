// @flow strict

import type { TServices } from 'types/contextTypes'

import * as React from 'react';

import { AppLoadingScreen } from 'components/App/AppLoadingScreen';
import { AppErrorScreen } from 'components/App/AppErrorScreen';
import { ServicesContext } from 'contexts/ServicesContext';
import { useContextStrict } from 'hooks/useContextStrict';
import { usePromiseEffect } from 'hooks/usePromiseEffect';
import { PlayerScreenContainer } from 'containers/PlayerScreenContainer';

type TProps = {|
|}

export const AppContainer = (props: TProps) => {

  const { startApp } = useContextStrict<TServices>(ServicesContext)

  const { isPending, data, error } = usePromiseEffect<void, []>(startApp, []);

  return (
    <>
      {
        isPending && (
          <AppLoadingScreen />
        )
      }
      {
        (error !== null) && (
          <AppErrorScreen>
            {error.message} 
          </AppErrorScreen>
        )
      }
      {
        data === undefined && (
          <PlayerScreenContainer />
        )
      }
    </>
  )
}
