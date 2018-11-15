// @flow strict

import React from 'react';
import ReactDOM from 'react-dom';

import { Root } from 'containers/Root';

const mountPoint = document.getElementById('root');

if (mountPoint) {
  ReactDOM.render(
    <Root />, mountPoint
  );
}
