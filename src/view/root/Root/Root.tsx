import * as React from "react";
import { BrowserRouter as RouterProvider } from "react-router-dom";

import { ServiceContext } from "context/ServiceContext";
import { AppProvider } from "provider/AppProvider";
import { App } from "view/root/App";
import { ThemeProvider } from "view/root/ThemeProvider";
import { RootFallback } from "view/root/RootFallback";
import { Service } from "type/service";

type TProps = {
  service: Service;
  routerBasename?: string;
};

export const Root = ({ service, routerBasename }: TProps) => (
  <RouterProvider basename={routerBasename}>
    <ServiceContext.Provider value={service}>
      <ThemeProvider>
        <RootFallback>
          <AppProvider>
            <App />
          </AppProvider>
        </RootFallback>
      </ThemeProvider>
    </ServiceContext.Provider>
  </RouterProvider>
);
