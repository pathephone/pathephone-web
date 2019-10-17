import React from "react";

import { SearchAlbumsPageState } from "type/state";

export const SearchAlbumsPageContext = React.createContext<null | SearchAlbumsPageState>(
  null
);
