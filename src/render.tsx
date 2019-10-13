import React from "react";
import ReactDOM from "react-dom";

import { Root } from "view/root/Root";
import { mockServices } from "service/mock";

const mountPoint = document.getElementById("root");

if (mountPoint) {
  ReactDOM.render(<Root services={mockServices} />, mountPoint);
}
