import * as React from "react";

import { SearchControls } from "view/widget/SearchControls/index";
import { OverviewControls } from "view/widget/OverviewControls/index";
import { PlayerContent } from "view/root/PlayerContent";
import { PlaylistControls } from "view/widget/PlaylistControls";
import { PlaybackControls } from "view/widget/PlaybackControls";
import { usePlaylistService } from "hook/usePlaylistService";
import { usePlayerState } from "hook/usePlayerState";
import { useAudioService } from "hook/useAudioService";
import { usePlayingTrackId } from "hook/usePlayingTrackId";

export const PlayerScreen = () => {
  usePlaylistService();

  useAudioService();

  const playingTrackId = usePlayingTrackId();

  const { primaryControls, secondaryControls } = usePlayerState();

  const hasPlaybakControls =
    playingTrackId !== null && secondaryControls === "PLAYBACK";

  const hasPlaylistControls =
    playingTrackId !== null && secondaryControls === "PLAYLIST";

  const hasSearchControls = primaryControls === "SEARCH";

  const hasNavigationControls = primaryControls === "OVERVIEW";

  return (
    <>
      <PlayerContent />
      {hasSearchControls && <SearchControls />}
      {hasNavigationControls && <OverviewControls />}
      {hasPlaylistControls && <PlaylistControls />}
      {hasPlaybakControls && <PlaybackControls />}
    </>
  );
};
