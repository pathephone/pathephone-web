// @flow strict

import type { TServices } from "type/state";

import * as React from "react";

import { mockServices } from "service/mock";

export const ServicesContext = React.createContext<TServices>(mockServices);
