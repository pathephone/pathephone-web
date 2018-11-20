// @flow strict

import React, { Component } from 'react';

import styles from 'styles/App.module.css'

import { startApp } from 'methods/startApp';
import { PlayerScreen } from 'containers/PlayerScreen';
import { useToggler } from 'hooks/useToggler';
import { useState } from 'hooks/useState';
import { useEffect } from 'hooks/useEffect';

type TProps = {||}

export const App = (props: TProps) => {
  const [ hasLoadingScreen, toggleLoadingScreen ] = useToggler(true)
  const [ hasPlayerScreen, togglePlayerScreen ] = useToggler(false)
  const [ errorMessage, setErrorMessage ] = useState<string | null>(null)

  useEffect(() => {
    const handleSuccess = () => {
      toggleLoadingScreen()
      togglePlayerScreen()
    }
    const handleFailure = (e) => {
      toggleLoadingScreen()
      setErrorMessage(e.message)
    }
    startApp()
      .then(handleSuccess)
      .catch(handleFailure)
  },[])

  if (hasLoadingScreen) {
    return (
      <div className={styles.App__LoadingScreen} />
    )
  }
  if (errorMessage !== null) {
    return (
      <div className={styles.App__ErrorScreen}>
        {errorMessage} 
      </div>
    )
  }
  if (hasPlayerScreen) {
    return (
      <PlayerScreen />
    )
  }
  return null
}
