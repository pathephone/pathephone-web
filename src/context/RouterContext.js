// @flow strict

import React from "react";
import type { ContextRouter } from "react-router-dom";

export const RouterContext = React.createContext<null | ContextRouter>(null);
