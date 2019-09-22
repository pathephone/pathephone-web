import { configure } from "@storybook/react";

import "./decorators";

// automatically import all files ending in *.stories.js
configure(require.context("../src", true, /\.book\.jsx$/), module);
