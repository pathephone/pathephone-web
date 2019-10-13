import { TPlaylistPopupEvent } from "./playlistPopup";
import { TPlaylistTrackEvent } from "./playlistTrack";
import { TPlaylistControlsEvent } from "./playlistControls";
import { TPlaybackControlsEvent } from "./playbackControls";
import { TSearchControlsEvent } from "./searchControls";
import { TOverviewControlsEvent } from "./overviewControls";
import { TFeedAlbumEvent } from "./feedAlbum";
import { TAudioEvent } from "./audio";
import { TAlbumAudioEditorEvent } from "./albumAudioEditor";
import { TAlbumCoverEditorEvent } from "./albumCoverEditor";
import { TAlbumTrackEditorEvent } from "./albumTrackEditor";
import { TAlbumEditorEvent } from "./albumEditor";
import { TDropZoneEvent } from "./dropZone";
import { TLatestAlbumsPageEvent } from "./latestAlbumsPage";
import { TSearchAlbumsPageEvent } from "./searchAlbumsPage";

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
  | TLatestAlbumsPageEvent
  | TSearchAlbumsPageEvent;
