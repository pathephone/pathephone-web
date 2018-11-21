// @flow strict

import * as React from 'react'
import { BrowserRouter } from 'react-router-dom';

import { App } from 'containers/App';
import { PlaylistProvider } from 'containers/PlaylistProvider';

export const Root = () => (
  <BrowserRouter>
    <PlaylistProvider>
      <App />
    </PlaylistProvider>
  </BrowserRouter>
)