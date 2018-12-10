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

type TProps = {|
|}

export const App = (props: TProps) => {

  const [ hasLoadingScreen, setHasLoadingScreen ] = React.useState<boolean>(false)
  const [ hasPlayerScreen, setHasPlayerScreen ] = React.useState<boolean>(false)
  const [ error, setError ] = React.useState<null | Error>(null)

  const { startApp } = useContextStrict<TServices>(ServicesContext)

  React.useEffect(() => {
    setHasLoadingScreen(true)
    startApp()
      .then(() => setHasPlayerScreen(true))
      .catch(setError)
      .then(() => setHasLoadingScreen(false))
  },[])

  return (
    <AppWrapper>
      {
        hasLoadingScreen && (
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
        hasPlayerScreen && (
          <PlayerScreen />
        )
      }
    </AppWrapper>
  )
}
