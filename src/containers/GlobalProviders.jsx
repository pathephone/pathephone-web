// @flow strict

import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';

type TProps = {
  children: React.Node;
}

export const GlobalProviders = ({ children }: TProps) => (
  <BrowserRouter>
    {children}
  </BrowserRouter>
)