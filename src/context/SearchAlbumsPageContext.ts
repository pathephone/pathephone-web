import React from "react";

import { TSearchAlbumsPageState } from "type/state";

export const SearchAlbumsPageContext = React.createContext<null | TSearchAlbumsPageState>(
  null
);
