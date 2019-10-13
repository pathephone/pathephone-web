import * as React from "react";

import { mockServices } from "service/mock";

import { TServices } from "type/state";

export const ServicesContext = React.createContext<TServices>(mockServices);
