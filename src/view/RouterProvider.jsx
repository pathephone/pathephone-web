// @flow strict

import { BrowserRouter as Router, withRouter } from "react-router-dom";
import * as React from "react";

import { RouterContext } from "contexts/RouterContext";
import { ROUTER_BASENAME } from "data/constants";

type TProps = {
  children: React.Node
};

const RouterContextProvider = withRouter(({ children, ...contextValue }) => (
  <RouterContext.Provider value={contextValue}>
    {children}
  </RouterContext.Provider>
));

export const RouterProvider = (props: TProps) => {
  const { children } = props;
  return (
    <Router basename={ROUTER_BASENAME}>
      <RouterContextProvider>{children}</RouterContextProvider>
    </Router>
  );
};
