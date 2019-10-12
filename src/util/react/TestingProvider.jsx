// @flow strict

import type { TServices, TAppState } from "type/state";
import type { History } from "history";

import * as React from "react";
import { Router, Route } from "react-router-dom";
import { createMemoryHistory } from "history";

import { ServicesContext } from "context/ServicesContext";
import { mockServices } from "service/mock/index";
import { AppContext } from "context/AppContext";
import { getAppStateMock } from "util/mock/getAppStateMock";

type TProps = {|
  children: React.Node,
  services?: TServices,
  appState?: TAppState,
  history?: History,
  path?: string
|};

export const TestingProvider = ({
  children,
  services = mockServices,
  appState = getAppStateMock(),
  history = createMemoryHistory(),
  path = "/"
}: TProps) => {
  return (
    <Router history={history}>
      <ServicesContext.Provider value={services}>
        <AppContext.Provider value={appState}>
          <Route path={path}>{children}</Route>
        </AppContext.Provider>
      </ServicesContext.Provider>
    </Router>
  );
};
