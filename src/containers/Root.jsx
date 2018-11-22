// @flow strict

import type { TApiMethods } from 'data/apiMethods'

import * as React from 'react'
import { BrowserRouter } from 'react-router-dom';

import { App } from 'containers/App';
import { PlaylistProvider } from 'containers/PlaylistProvider';
import { Localization } from 'containers/Localization';
import { ApiContext } from 'contexts/ApiContext';

type TProps = {|
  apiMethods: TApiMethods;
|}

export const Root = ({ apiMethods }: TProps) => (
  <BrowserRouter>
    <ApiContext.Provider value={apiMethods}>
      <Localization>
        <App />
      </Localization>
    </ApiContext.Provider>
  </BrowserRouter>
)