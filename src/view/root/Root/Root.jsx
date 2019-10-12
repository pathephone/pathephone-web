// @flow strict

import type { TServices } from "type/state";

import * as React from "react";
import { BrowserRouter as RouterProvider } from "react-router-dom";

import { ServicesContext } from "context/ServicesContext";
import { AppProvider } from "provider/AppProvider";
import { App } from "view/root/App";
import { ThemeProvider } from "view/root/ThemeProvider";
import { RootFallback } from "view/root/RootFallback";

type TProps = {
  services: TServices
};

export const Root = ({ services }: TProps) => (
  <RouterProvider>
    <ServicesContext.Provider value={services}>
      <ThemeProvider>
        <RootFallback>
          <AppProvider>
            <App />
          </AppProvider>
        </RootFallback>
      </ThemeProvider>
    </ServicesContext.Provider>
  </RouterProvider>
);
