// @flow strict

import type { TSubmitAlbumServiceEvent } from "./submitAlbum";
import type { TProcessFilesServiceEvent } from "./processFiles";

export type TServiceEvent =
  | TSubmitAlbumServiceEvent
  | TProcessFilesServiceEvent;
