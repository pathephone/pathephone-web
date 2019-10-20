import React from "react";
import ReactDOM from "react-dom";

import { Root } from "view/root/Root";

const mountPoint = document.getElementById("root");

if (mountPoint) {
  if (process.env.NODE_ENV === "production") {
    const { productionService } = require("service/production");

    ReactDOM.render(<Root service={productionService} />, mountPoint);
  } else {
    const { mockService } = require("service/mock");

    ReactDOM.render(<Root service={mockService} />, mountPoint);
  }
}
