// @flow strict

import * as React from 'react'

import { GlobalProviders } from 'containers/GlobalProviders';
import { App } from 'containers/App';
import { PlaylistProvider } from 'contexts/Playlist/PlaylistProvider';

export const Root = () => (
  <GlobalProviders>
    <PlaylistProvider>
      <App />
    </PlaylistProvider>
  </GlobalProviders>
)