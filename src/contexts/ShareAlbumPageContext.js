// @flow strict

import type { TShareAlbumPageState } from "types/state";

import * as React from "react";

export const ShareAlbumPageContext = React.createContext<null | TShareAlbumPageState>(
  null
);
