// @flow strict

import type { TServices, TIntl } from "types/state";

import * as React from "react";

import { ServicesContext } from "contexts/ServicesContext";
import { LocaleStringsContext } from "contexts/LocaleStringsContext";
import { RouterProvider } from "view/RouterProvider";

import { App } from "./nested/App";
import { ThemeProvider } from "./nested/ThemeProvider";
import { RootFallback } from "./nested/RootFallback";

type TProps = {
  services: TServices,
  defaultLocaleStrings: TIntl
};

export const Root = ({ services, defaultLocaleStrings }: TProps) => (
  <RouterProvider>
    <ServicesContext.Provider value={services}>
      <LocaleStringsContext.Provider value={defaultLocaleStrings}>
        <ThemeProvider>
          <RootFallback>
            <App />
          </RootFallback>
        </ThemeProvider>
      </LocaleStringsContext.Provider>
    </ServicesContext.Provider>
  </RouterProvider>
);
