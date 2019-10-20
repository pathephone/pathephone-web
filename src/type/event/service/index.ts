import { SubmitAlbumCandidateEvent } from "./submitAlbumCandidate";
import { GetAlbumCandidateFromFilesEvent } from "./getAlbumCandidateFromFiles";
import { GetIntlEvent } from "./getIntl";
import { GetAlbumPreviewsFeedEvent } from "./getAlbumPreviewsFeed";
import { GetAlbumPreviewsByQueryEvent } from "./getAlbumPreviewsByQuery";

export type TServiceEvent =
  | SubmitAlbumCandidateEvent
  | GetAlbumCandidateFromFilesEvent
  | GetIntlEvent
  | GetAlbumPreviewsFeedEvent
  | GetAlbumPreviewsByQueryEvent;
