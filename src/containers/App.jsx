// @flow strict

import React, { Component } from 'react';

import { startApp } from 'methods/startApp';
import { PlayerScreen } from 'components/PlayerScreen';
import { AppLoadingScreen } from 'components/App/AppLoadingScreen';
import { AppErrorScreen } from 'components/App/AppErrorScreen';

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
        <AppLoadingScreen />
      )
    }
    if (hasPlayerScreen) {
      return (
        <PlayerScreen />
      )
    }
    if (errorMessage !== null) {
      return (
        <AppErrorScreen message={errorMessage} />
      )
    }
    return null
  }
}
