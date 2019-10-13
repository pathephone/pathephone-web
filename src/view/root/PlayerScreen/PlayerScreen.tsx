import * as React from "react";

import { SearchControls } from "view/widget/SearchControls/index";
import { OverviewControls } from "view/widget/OverviewControls/index";
import { PlayerContent } from "view/root/PlayerContent";
import { usePlayingTrackId } from "hook/usePlayingTrackId";
import { PlaylistControls } from "view/widget/PlaylistControls";
import { PlaybackControls } from "view/widget/PlaybackControls";
import { usePlayerContext } from "hook/usePlayerContext";
import { useAudio } from "hook/useAudio";
import { usePlayingTrackURL } from "hook/usePlayingTrackURL";

export const PlayerScreen = () => {
  const { play, stop } = useAudio();

  const trackURL = usePlayingTrackURL();

  // Effect tracks playing track url and
  // loads it into Audio object
  React.useEffect(() => {
    if (trackURL) {
      play(trackURL);
    } else {
      stop();
    }
  }, [play, stop, trackURL]);

  // Effect cleans up Audio object before unmount
  React.useEffect(() => {
    return stop;
  }, [stop]);

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
