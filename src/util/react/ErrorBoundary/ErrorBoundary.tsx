import * as React from "react";

type TProps = {
  constructors: (new () => Error)[];
  fallbackView(props: Error): React.ReactNode;
};

type TState = {
  error: null | Error;
};

export class ErrorBoundary extends React.Component<TProps, TState> {
  state: TState = {
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

  componentDidCatch(error: Error) {
    if (process.env.NODE_ENV === "development") {
      console.log(error);
    }
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
