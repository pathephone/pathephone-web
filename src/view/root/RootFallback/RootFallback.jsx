// @flow strict

import * as React from "react";

import { ErrorBoundary } from "util/react/ErrorBoundary";

import { RootFallbackScreen } from "./styled/RootFallbackScreen";

type TProps = {
  children: React.Node
};

export const RootFallback = ({ children }: TProps) => (
  <ErrorBoundary constructors={[TypeError]} fallbackView={RootFallbackScreen}>
    {children}
  </ErrorBoundary>
);
