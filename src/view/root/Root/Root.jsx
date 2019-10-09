// @flow strict

import type { TServices } from "types/state";

import * as React from "react";

import { ServicesContext } from "contexts/ServicesContext";
import { AppStateProvider } from "providers/AppStateProvider/index";
import { RouterProvider } from "view/root/RouterProvider";
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
          <AppStateProvider>
            <App />
          </AppStateProvider>
        </RootFallback>
      </ThemeProvider>
    </ServicesContext.Provider>
  </RouterProvider>
);
