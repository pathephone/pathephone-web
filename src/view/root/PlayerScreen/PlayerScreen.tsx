import * as React from "react";

import { SearchControls } from "view/widget/SearchControls/index";
import { OverviewControls } from "view/widget/OverviewControls/index";
import { PlayerContent } from "view/root/PlayerContent";
import { usePlayingTrackId } from "hook/usePlayingTrackId";
import { PlaylistControls } from "view/widget/PlaylistControls";
import { PlaybackControls } from "view/widget/PlaybackControls";
import { usePlayerContext } from "hook/usePlayerContext";

type TProps = {};

export const PlayerScreen = (props: TProps) => {
  const { primaryControls, secondaryControls } = usePlayerContext();

  const playingTrackId = usePlayingTrackId();

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
