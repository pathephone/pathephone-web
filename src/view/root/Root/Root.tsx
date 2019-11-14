import * as React from "react";
import { Router as RouterProvider } from "react-router";
import { History } from "history";

import { ServiceContext } from "context/ServiceContext";
import { App } from "view/root/App";
import { ThemeProvider } from "view/root/ThemeProvider";
import { RootFallback } from "view/root/RootFallback";
import { Service } from "type/service";
import { AppStateProvider } from "provider/AppStateProvider";

type TProps = {
  service: Service;
  history: History;
};

export const Root = ({ service, history }: TProps) => (
  <RouterProvider history={history}>
    <ServiceContext.Provider value={service}>
      <ThemeProvider>
        <RootFallback>
          <AppStateProvider>
            <App />
          </AppStateProvider>
        </RootFallback>
      </ThemeProvider>
    </ServiceContext.Provider>
  </RouterProvider>
);
