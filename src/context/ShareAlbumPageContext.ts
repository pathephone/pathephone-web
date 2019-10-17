import * as React from "react";

import { ShareAlbumPageState } from "type/state";

export const ShareAlbumPageContext = React.createContext<null | ShareAlbumPageState>(
  null
);
