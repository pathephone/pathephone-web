// @flow strict

import type { TAppContext } from 'types/contextTypes'

import * as React from 'react'
import { BrowserRouter } from 'react-router-dom';

import { ServicesContext } from 'contexts/ServicesContext';
import { LocaleStringsContext } from 'contexts/LocaleStringsContext';
import { AppContainer } from 'containers/AppContainer';

type TProps = TAppContext;

export const RootContainer = ({ services, defaultLocaleStrings }: TProps) => (
  <BrowserRouter>
    <ServicesContext.Provider value={services}>
      <LocaleStringsContext.Provider value={defaultLocaleStrings}>
        <AppContainer />
      </LocaleStringsContext.Provider>
    </ServicesContext.Provider>
  </BrowserRouter>
)