// @flow strict

import * as React from 'react'

import { GlobalProviders } from 'containers/GlobalProviders';
import { App } from 'containers/App';

export const Root = () => (
  <GlobalProviders>
    <App />
  </GlobalProviders>
)