// @flow strict

import type { TPlaylistPopupEvent } from "./playlistPopup";
import type { TPlaylistTrackEvent } from "./playlistTrack";
import type { TPlaylistControlsEvent } from "./playlistControls";
import type { TPlaybackControlsEvent } from "./playbackControls";
import type { TSearchControlsEvent } from "./searchControls";
import type { TOverviewControlsEvent } from "./overviewControls";
import type { TFeedAlbumEvent } from "./feedAlbum";
import type { TAudioEvent } from "./audio";
import type { TAlbumAudioEditorEvent } from "./albumAudioEditor";
import type { TAlbumCoverEditorEvent } from "./albumCoverEditor";
import type { TAlbumTrackEditorEvent } from "./albumTrackEditor";
import type { TAlbumEditorEvent } from "./albumEditor";
import type { TDropZoneEvent } from "./dropZone";
import type { TLatestAlbumsPageEvent } from "./latestAlbumsPage";

export type TUiEvent =
  | TPlaylistPopupEvent
  | TPlaylistTrackEvent
  | TPlaylistControlsEvent
  | TPlaybackControlsEvent
  | TSearchControlsEvent
  | TOverviewControlsEvent
  | TFeedAlbumEvent
  | TAudioEvent
  | TAlbumAudioEditorEvent
  | TAlbumCoverEditorEvent
  | TAlbumTrackEditorEvent
  | TAlbumEditorEvent
  | TDropZoneEvent
  | TLatestAlbumsPageEvent;
