// @flow strict

import * as React from 'react';

import { PlayerScreen } from 'containers/PlayerScreen';
import { useContextStrict } from 'hooks/useContext';
import { ApiContext } from 'contexts/ApiContext';
import { usePromise } from 'hooks/usePromise';
import { useError } from 'hooks/useError';
import { AppWrapper } from 'components/App/AppWrapper';
import { AppLoadingScreen } from 'components/App/AppLoadingScreen';
import { AppErrorScreen } from 'components/App/AppErrorScreen';

type TProps = {|
|}

export const App = (props: TProps) => {

  const [ hasLoadingScreen, setHasLoadingScreen ] = React.useState<boolean>(true)
  const [ hasPlayerScreen, setHasPlayerScreen ] = React.useState<boolean>(true)
  const [ error, setError ] = React.useState<null | Error>(null)

  const { startApp } = useContextStrict(ApiContext)

  React.useEffect(() => {
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
