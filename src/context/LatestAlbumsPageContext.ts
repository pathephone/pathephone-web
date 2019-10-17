import React from "react";

import { LatestAlbumsPageState } from "type/state";

export const LatestAlbumsPageContext = React.createContext<null | LatestAlbumsPageState>(
  null
);
