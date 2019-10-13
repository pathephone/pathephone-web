import { TSubmitAlbumServiceEvent } from "./submitAlbum";
import { TProcessFilesServiceEvent } from "./processFiles";
import { TGetIntlServiceEvent } from "./getIntl";
import { TGetLatestAlbumsServiceEvent } from "./getLatestAlbumsService";
import { TGetAlbumsByQueryServiceEvent } from "./getAlbumsByQuery";

export type TServiceEvent =
  | TSubmitAlbumServiceEvent
  | TProcessFilesServiceEvent
  | TGetIntlServiceEvent
  | TGetLatestAlbumsServiceEvent
  | TGetAlbumsByQueryServiceEvent;
