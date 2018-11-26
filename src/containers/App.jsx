// @flow strict

import * as React from 'react';

import { startApp } from 'api/startApp';
import { PlayerScreen } from 'containers/PlayerScreen';
import { useToggler } from 'hooks/useToggler';
import { useState } from 'hooks/useState';
import { useEffect } from 'hooks/useEffect';
import { useContextStrict, useContext } from 'hooks/useContext';
import { ApiContext } from 'contexts/ApiContext';
import { usePromise } from 'hooks/usePromise';
import { useError } from 'hooks/useError';
import { AppWrapper } from 'components/App/AppWrapper';
import { AppLoadingScreen } from 'components/App/AppLoadingScreen';
import { AppErrorScreen } from 'components/App/AppErrorScreen';

type TProps = {|
|}

export const App = (props: TProps) => {

  const [ hasLoadingScreen, toggleHasLoadingScreen ] = useToggler(true)
  const [ hasPlayerScreen, toggleHasPlayerScreen ] = useToggler(true)
  const { errorMessage, setError } = useError(null)

  const { startApp } = useContextStrict(ApiContext)

  useEffect(() => {
    startApp()
      .then(toggleHasPlayerScreen)
      .catch(setError)
      .then(toggleHasLoadingScreen)
  },[])

  return (
    <AppWrapper>
      {
        hasLoadingScreen && (
          <AppLoadingScreen />
        )
      }
      {
        (errorMessage !== null) && (
          <AppErrorScreen>
            {errorMessage} 
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
