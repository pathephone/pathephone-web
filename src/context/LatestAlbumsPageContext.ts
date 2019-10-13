import React from "react";

import { TLatestAlbumsPageState } from "type/state";

export const LatestAlbumsPageContext = React.createContext<null | TLatestAlbumsPageState>(
  null
);
