// @flow strict

import type { TLatestAlbumsPageState } from "types/state";

import React from "react";

export const LatestAlbumsPageContext = React.createContext<null | TLatestAlbumsPageState>(
  null
);
