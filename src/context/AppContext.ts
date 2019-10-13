import * as React from "react";

import { TAppState } from "type/state";

export const AppContext = React.createContext<null | TAppState>(null);
