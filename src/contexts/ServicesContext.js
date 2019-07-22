// @flow strict

import type { TServices } from "types/state";

import * as React from "react";

import { mockServices } from "services/mock";

export const ServicesContext = React.createContext<TServices>(mockServices);
