// @flow strict

import * as React from 'react'
import { BrowserRouter } from 'react-router-dom';

import { App } from 'containers/App';
import { GlobalContextProvider } from 'containers/GlobalContextProvider';

export const Root = () => (
  <BrowserRouter>
    <GlobalContextProvider>
      <App />
    </GlobalContextProvider>
  </BrowserRouter>
)