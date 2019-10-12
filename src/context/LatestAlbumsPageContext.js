// @flow strict

import type { TLatestAlbumsPageState } from "type/state";

import React from "react";

export const LatestAlbumsPageContext = React.createContext<null | TLatestAlbumsPageState>(
  null
);
