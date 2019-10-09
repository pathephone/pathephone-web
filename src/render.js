// @flow strict

import React from "react";
import ReactDOM from "react-dom";

import { appContextMock } from "data/appContextMock";
import { Root } from "view/root/Root";

const mountPoint = document.getElementById("root");

if (mountPoint) {
  ReactDOM.render(<Root {...appContextMock} />, mountPoint);
}
