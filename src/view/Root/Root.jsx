// @flow strict

import type { TServices } from "types/state";

import * as React from "react";

import { ServicesContext } from "contexts/ServicesContext";
import { RouterProvider } from "view/RouterProvider";

import { App } from "./nested/App";
import { ThemeProvider } from "./nested/ThemeProvider";
import { RootFallback } from "./nested/RootFallback";

type TProps = {
  services: TServices
};

export const Root = ({ services }: TProps) => (
  <RouterProvider>
    <ServicesContext.Provider value={services}>
      <ThemeProvider>
        <RootFallback>
          <App />
        </RootFallback>
      </ThemeProvider>
    </ServicesContext.Provider>
  </RouterProvider>
);
