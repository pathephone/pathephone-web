// @flow strict

import type { TAppState } from "type/state";

import * as React from "react";

export const AppContext = React.createContext<null | TAppState>(null);
