import { PlaylistPopupEvent } from "./playlistPopup";
import { PlaylistTrackEvent } from "./playlistTrack";
import { PlaylistControlsEvent } from "./playlistControls";
import { PlaybackControlsEvent } from "./playbackControls";
import { SearchControlsEvent } from "./searchControls";
import { OverviewControlsEvent } from "./overviewControls";
import { AlbumPreviewEvent } from "./feedAlbum";
import { AudioEvent } from "./audio";
import { AlbumAudioEditorEvent } from "./albumAudioEditor";
import { AlbumCoverEditorEvent } from "./albumCoverEditor";
import { AlbumTrackEditorEvent } from "./albumTrackEditor";
import { AlbumEditorEvent } from "./albumEditor";
import { DropZoneEvent } from "./dropZone";
import { LatestAlbumsPageEvent } from "./latestAlbumsPage";
import { SearchAlbumsPageEvent } from "./searchAlbumsPage";
import { ShareAlbumPageEvent } from "./shareAlbumPage";

export type UIEvent =
  | PlaylistPopupEvent
  | PlaylistTrackEvent
  | PlaylistControlsEvent
  | PlaybackControlsEvent
  | SearchControlsEvent
  | OverviewControlsEvent
  | AlbumPreviewEvent
  | AudioEvent
  | AlbumAudioEditorEvent
  | AlbumCoverEditorEvent
  | AlbumTrackEditorEvent
  | AlbumEditorEvent
  | DropZoneEvent
  | LatestAlbumsPageEvent
  | SearchAlbumsPageEvent
  | ShareAlbumPageEvent;
