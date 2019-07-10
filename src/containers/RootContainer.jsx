// @flow strict

import type { TServices, TIntl } from "types/state";

import * as React from "react";

import { ServicesContext } from "contexts/ServicesContext";
import { LocaleStringsContext } from "contexts/LocaleStringsContext";
import { AppContainer } from "containers/AppContainer";
import { ErrorBoundary } from "components/ErrorBoundary";
import { AppErrorScreen } from "components/App/AppErrorScreen";
import { RouterProvider } from "./RouterProvider";

type TProps = {
  services: TServices,
  defaultLocaleStrings: TIntl
};

export const RootContainer = ({ services, defaultLocaleStrings }: TProps) => (
  <RouterProvider>
    <ServicesContext.Provider value={services}>
      <LocaleStringsContext.Provider value={defaultLocaleStrings}>
        <ErrorBoundary
          errorConstructor={TypeError}
          errorRenderer={AppErrorScreen}
        >
          <AppContainer />
        </ErrorBoundary>
      </LocaleStringsContext.Provider>
    </ServicesContext.Provider>
  </RouterProvider>
);
