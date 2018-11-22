// @flow strict

import * as React from 'react';

import styles from 'styles/App.module.css'

import { startApp } from 'methods/startApp';
import { PlayerScreen } from 'containers/PlayerScreen';
import { useToggler } from 'hooks/useToggler';
import { useState } from 'hooks/useState';
import { useEffect } from 'hooks/useEffect';
import { useContextStrict, useContext } from 'hooks/useContext';
import { ApiContext } from 'contexts/ApiContext';
import { Localization } from 'containers/Localization';
import { LocalizationContext } from 'contexts/LocalizationContext';
import { usePromise } from 'hooks/usePromise';

type TProps = {|
|}

export const App = (props: TProps) => {

  const { getConfig } = useContextStrict(ApiContext)

  useEffect(() => {
    const { data, isPending, errorMessage } = usePromise<TPlayerConfig>(getPlayerConfig())
  },[])

  return (
    <div className={styles.App__Wrapper}>
      {
        isPending && (
          <div className={styles.App__LoadingScreen} />
        )
      }
      {
        (errorMessage !== null) && (
          <div className={styles.App__ErrorScreen}>
            {errorMessage} 
          </div>
        )
      }
      {
        data && (
          <Player />
        )
      }
    </div>
  )
}
