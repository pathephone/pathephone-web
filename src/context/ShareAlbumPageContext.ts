import * as React from "react";

import { TShareAlbumPageState } from "type/state";

export const ShareAlbumPageContext = React.createContext<null | TShareAlbumPageState>(
  null
);
