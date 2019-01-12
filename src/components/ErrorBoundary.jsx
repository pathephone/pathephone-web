// @flow strict

import * as React from 'react';

type TProps = {|
  errorConstructor: Class<Error>;
  children: React.Node;  
  errorRenderer(props: Error): React.Node;
|}

type TState = {|
  error: null | Error;  
|}

export class ErrorBoundary extends React.Component<TProps, TState> {

  state = {
    error: null
  }

  static getDerivedStateFromError(error: Error) {
    return {
      error
    }
  }

  render() {
    const { children, errorRenderer, errorConstructor } = this.props;
    const { error } = this.state;
    if (error !== null) {
      if (error instanceof errorConstructor) {
        return errorRenderer(error);
      } else {
        throw error;
      }
    }
    return children;
  }
}