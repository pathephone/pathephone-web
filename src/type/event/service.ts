import { AsyncEventProto } from "type/util";
import { AlbumCandidate, TrackPreview } from "type/model";
import { AlbumPreview } from "type/model";
import { Intl } from "type/intl";
import { Feed } from "type/model";

type GetAlbumPreviewsFeedEvent = AsyncEventProto<
  "GET_ALBUM_PREVIEWS_FEED",
  Feed<AlbumPreview>,
  number
>;

type GetIntlEvent = AsyncEventProto<"GET_INTL", Intl>;

type GetAlbumPreviewsByQueryEvent = AsyncEventProto<
  "GET_ALBUM_PREVIEWS_BY_QUERY",
  AlbumPreview[]
>;

type GetAlbumCandidateFromFilesEvent = AsyncEventProto<
  "GET_ALBUM_CANDIDATE_FROM_FILES",
  AlbumCandidate
>;

type SubmitAlbumCandidateEvent = AsyncEventProto<
  "SUBMIT_ALBUM_CANDIDATE",
  null
>;

type GetTrackPreviewsByAlbumIdsEvent = AsyncEventProto<
  "GET_TRACK_PREVIEWS_BY_ALBUM_IDS",
  TrackPreview[]
>;

export type ServiceEvent =
  | SubmitAlbumCandidateEvent
  | GetAlbumCandidateFromFilesEvent
  | GetIntlEvent
  | GetAlbumPreviewsFeedEvent
  | GetAlbumPreviewsByQueryEvent
  | GetTrackPreviewsByAlbumIdsEvent;
