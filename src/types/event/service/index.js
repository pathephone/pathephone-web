// @flow strict

import type { TSubmitAlbumServiceEvent } from "./submitAlbum";
import type { TProcessFilesServiceEvent } from "./processFiles";
import type { TGetIntlServiceEvent } from "./getIntl";
import type { TGetLatestAlbumsServiceEvent } from "./getLatestAlbumsService";

export type TServiceEvent =
  | TSubmitAlbumServiceEvent
  | TProcessFilesServiceEvent
  | TGetIntlServiceEvent
  | TGetLatestAlbumsServiceEvent;
