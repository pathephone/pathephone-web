// @flow strict

import type { TApiMethods } from 'data/apiMethods'
import type { TLocaleStrings } from 'data/localization/en.module'

import * as React from 'react'
import { BrowserRouter } from 'react-router-dom';

import { App } from 'containers/App';
import { ApiContext } from 'contexts/ApiContext';
import { LocaleStringsContext } from 'contexts/LocaleStringsContext';

type TProps = {|
  apiMethods: TApiMethods;
  defaultLocaleStrings: TLocaleStrings;
|}

export const Root = ({ apiMethods, defaultLocaleStrings }: TProps) => (
  <BrowserRouter>
    <ApiContext.Provider value={apiMethods}>
      <LocaleStringsContext.Provider value={defaultLocaleStrings}>
        <App />
      </LocaleStringsContext.Provider>
    </ApiContext.Provider>
  </BrowserRouter>
)