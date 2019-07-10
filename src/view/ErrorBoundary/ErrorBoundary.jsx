// @flow strict

import * as React from "react";

type TProps = {|
  children: React.Node,
  constructors: Class<Error>[],
  fallbackView(props: Error): React.Node
|};

type TState = {|
  error: null | Error
|};

export class ErrorBoundary extends React.Component<TProps, TState> {
  state = {
    error: null
  };

  static getDerivedStateFromError(error: Error) {
    if (error instanceof Error) {
      return {
        error
      };
    }
    throw new TypeError("ErrorBoundary accepts only instances of Error.");
  }

  render() {
    const { children, fallbackView, constructors } = this.props;
    const { error } = this.state;
    if (error !== null) {
      const shouldThrow = constructors.some(
        ErrorConstructor => error instanceof ErrorConstructor
      );
      if (shouldThrow) {
        return fallbackView(error);
      } else {
        throw error;
      }
    }
    return children;
  }
}
