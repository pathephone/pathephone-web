import React from "react";
import ReactDOM from "react-dom";

import { Root } from "view/root/Root";
import { mockService } from "service/mock";

const mountPoint = document.getElementById("root");

if (mountPoint) {
  ReactDOM.render(<Root service={mockService} />, mountPoint);
}
