import * as React from "react";

import { AppState } from "type/state";

export const AppContext = React.createContext<null | AppState>(null);
