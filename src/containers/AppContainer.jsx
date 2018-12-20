// @flow strict

import type { TServices } from 'types/contextTypes'

import * as React from 'react';

import { usePromise } from 'hooks/usePromise';
import { AppWrapper } from 'components/App/AppWrapper';
import { AppLoadingScreen } from 'components/App/AppLoadingScreen';
import { AppErrorScreen } from 'components/App/AppErrorScreen';
import { ServicesContext } from 'contexts/ServicesContext';
import { useContextStrict } from 'hooks/useContextStrict';
import { PlayerScreen } from 'components/PlayerScreen';
import { usePromiseEffect } from 'hooks/usePromiseEffect';

type TProps = {|
|}

export const App = (props: TProps) => {

  const { startApp } = useContextStrict<TServices>(ServicesContext)

  const [ hasLoadingScreen, setHasLoadingScreen ] = React.useState<boolean>(false)

  const { isPending, data, error } = usePromiseEffect<void, void>(startApp);

  return (
    <AppWrapper>
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
        data !== null && (
          <button onClick={() => setHasLoadingScreen(!hasLoadingScreen)}>aa</button>
        )
      }
    </AppWrapper>
  )
}
