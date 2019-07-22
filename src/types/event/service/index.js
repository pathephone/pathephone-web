// @flow strict

import type { TSubmitAlbumServiceEvent } from "./submitAlbum";
import type { TProcessFilesServiceEvent } from "./processFiles";
import type { TGetIntlServiceEvent } from "./getIntl";

export type TServiceEvent =
  | TSubmitAlbumServiceEvent
  | TProcessFilesServiceEvent
  | TGetIntlServiceEvent;
