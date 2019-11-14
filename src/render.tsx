import React from "react";
import ReactDOM from "react-dom";

import { Root } from "view/root/Root";
import { getRootService } from "util/getRootService";
import { getRootHistory } from "util/getRootHistory";

const mountPoint = document.getElementById("root");

if (mountPoint) {
  ReactDOM.render(
    <Root service={getRootService()} history={getRootHistory()} />,
    mountPoint
  );
}
