import { ServiceEventProto } from "type/util";
import { AlbumCandidate, TrackPreview } from "type/model";
import { AlbumPreview } from "type/model";
import { Intl } from "type/intl";
import { Feed } from "type/model";

type GetAlbumPreviewsFeedEvent = ServiceEventProto<
  "GET_ALBUM_PREVIEWS_FEED",
  Feed<AlbumPreview>
>;

type GetIntlEvent = ServiceEventProto<"GET_INTL", Intl>;

type GetAlbumPreviewsByQueryEvent = ServiceEventProto<
  "GET_ALBUM_PREVIEWS_BY_QUERY",
  AlbumPreview[]
>;

type GetAlbumCandidateFromFilesEvent = ServiceEventProto<
  "GET_ALBUM_CANDIDATE_FROM_FILES",
  AlbumCandidate
>;

type SubmitAlbumCandidateEvent = ServiceEventProto<
  "SUBMIT_ALBUM_CANDIDATE",
  null
>;

type getTrackPreviewsByAlbumIds = ServiceEventProto<
  "GET_TRACK_PREVIEWS_BY_ALBUM_IDS",
  TrackPreview[]
>;

export type TServiceEvent =
  | SubmitAlbumCandidateEvent
  | GetAlbumCandidateFromFilesEvent
  | GetIntlEvent
  | GetAlbumPreviewsFeedEvent
  | GetAlbumPreviewsByQueryEvent
  | getTrackPreviewsByAlbumIds;
