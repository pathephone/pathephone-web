// @flow strict

import type { TSearchAlbumsPageState } from "types/state";

import React from "react";

export const SearchAlbumsPageContext = React.createContext<null | TSearchAlbumsPageState>(
  null
);
