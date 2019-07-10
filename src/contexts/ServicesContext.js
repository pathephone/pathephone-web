// @flow strict

import type { TServices } from "types/state";

import * as React from "react";

export const ServicesContext = React.createContext<null | TServices>(null);
