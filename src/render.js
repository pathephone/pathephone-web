// @flow strict

import React from 'react';
import ReactDOM from 'react-dom';

import { Root } from 'containers/Root';
import { appContextMock } from 'data/appContextMock';

const mountPoint = document.getElementById('root');

if (mountPoint) {
  ReactDOM.render(
    <Root {...appContextMock} />,
    mountPoint
  );
}
