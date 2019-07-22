// @flow strict

import type { TServices, TAppState } from "types/state";

import * as React from "react";

import { ServicesContext } from "contexts/ServicesContext";
import { RouterProvider } from "view/RouterProvider";
import { mockServices } from "services/mock/index";
import { AppContext } from "contexts/AppContext";
import { getAppStateMock } from "utils/mock/getAppStateMock";

type TProps = {
  children: React.Node,
  services?: TServices,
  appState?: TAppState
};

export const TestingProvider = ({
  children,
  services = mockServices,
  appState = getAppStateMock()
}: TProps) => (
  <RouterProvider>
    <ServicesContext.Provider value={services}>
      <AppContext.Provider value={appState}>{children}</AppContext.Provider>
    </ServicesContext.Provider>
  </RouterProvider>
);
