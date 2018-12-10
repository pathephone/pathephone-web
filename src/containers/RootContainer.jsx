// @flow strict

import type { TAppContext } from 'types/contextTypes'

import * as React from 'react'
import { BrowserRouter } from 'react-router-dom';

import { App } from 'containers/AppContainer';
import { ServicesContext } from 'contexts/ServicesContext';
import { LocaleStringsContext } from 'contexts/LocaleStringsContext';

type TProps = TAppContext;

export const RootContainer = ({ services, defaultLocaleStrings }: TProps) => (
  <BrowserRouter>
    <ServicesContext.Provider value={services}>
      <LocaleStringsContext.Provider value={defaultLocaleStrings}>
        <App />
      </LocaleStringsContext.Provider>
    </ServicesContext.Provider>
  </BrowserRouter>
)