// @flow strict

import React from 'react';
import ReactDOM from 'react-dom';

import { Root } from 'containers/Root';
import { globalContext } from 'data/globalContext';

const mountPoint = document.getElementById('root');

if (mountPoint) {
  ReactDOM.render(
    <Root {...globalContext} />,
    mountPoint
  );
}
