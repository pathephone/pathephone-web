// @flow strict

import React, { Component } from 'react';

import styles from 'styles/App.module.css'

import { startApp } from 'methods/startApp';
import { PlayerScreen } from 'containers/PlayerScreen';

type TProps = {||}

type TState = {|
  hasLoadingScreen: boolean;
  hasPlayerScreen: boolean;
  errorMessage: null | string;
|}

export class App extends Component<TProps, TState> {
  state = {
    hasLoadingScreen: true,
    hasPlayerScreen: false,
    errorMessage: null
  }

  componentDidMount() {
    const handleSuccess = () => {
      this.setState({
        hasLoadingScreen: false,
        hasPlayerScreen: true
      })
    }
    const handleFailure = (e) => {
      this.setState({
        hasLoadingScreen: false,
        errorMessage: e.message 
      })
    }
    startApp()
      .then(handleSuccess)
      .catch(handleFailure)
  }

  render() {
    const { hasLoadingScreen, hasPlayerScreen, errorMessage } = this.state;
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
}
