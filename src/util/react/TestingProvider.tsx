import * as React from "react";
import { Router, Route } from "react-router-dom";
import { createMemoryHistory, History } from "history";

import { AppState } from "type/state";
import { ServiceContext } from "context/ServiceContext";
import { mockService } from "service/mock";
import { AppContext } from "context/AppContext";
import { Service } from "type/service";
import { getAppStateMock } from "util/mock/appStateMock";

type TProps = {
  children: React.ReactNode;
  service?: Service;
  appState?: AppState;
  history?: History;
  path?: string;
};

export const TestingProvider = ({
  children,
  service = mockService,
  appState = getAppStateMock(),
  history = createMemoryHistory(),
  path = "/"
}: TProps) => {
  return (
    <Router history={history}>
      <ServiceContext.Provider value={service}>
        <AppContext.Provider value={appState}>
          <Route path={path}>{children}</Route>
        </AppContext.Provider>
      </ServiceContext.Provider>
    </Router>
  );
};
