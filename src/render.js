// @flow strict

import React from "react";
import ReactDOM from "react-dom";

import { RootContainer } from "containers/RootContainer";
import { appContextMock } from "data/appContextMock";

const mountPoint = document.getElementById("root");

if (mountPoint) {
  ReactDOM.render(<RootContainer {...appContextMock} />, mountPoint);
}
