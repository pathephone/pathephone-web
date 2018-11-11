import React, { Component } from 'react';

import { LoadingScreen } from '../components/LoadingScreen';

export class AppContainer extends Component {
  state = {
    hasLoadingScreen: true,
    hasReadyScreen: false,
    errorMessage: null
  }
  componentDidMount() {
    const handleSuccess = () => {
      this.setState({
        hasLoadingScreen: false,
        hasReadyScreen: true
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
    const { hasLoadingScreen, hasReadyScreen, errorMessage } = this.state;
    return (
      <App>
        {
          hasLoadingScreen && (
            <LoadingScreen />
          )
        }
        {
          hasReadyScreen && (
            <ReadyScreenContainer />
          )
        }
        {
          errorMessage && (
            <ErrorScreen message={errorMessage} />
          )
        }
      </App>
    );
  }
}
