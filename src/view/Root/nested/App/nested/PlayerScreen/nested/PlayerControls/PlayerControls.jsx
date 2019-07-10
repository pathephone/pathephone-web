// @flow strict

import * as React from "react";

import { PlayerContext } from "contexts/PlayerContext";
import { useContextStrict } from "hooks/useContextStrict";

import { PlaylistControls } from "./nested/PlaylistControls";
import { PlaybackControls } from "./nested/PlaybackControls";
import { PlayerControlsPanel } from "./styled/PlayerControlsPanel";

type TProps = {||};

export const PlayerControls = (props: TProps) => {
  const { playlist, playingTrackId } = useContextStrict(PlayerContext);

  const [hasPlaylistMode, setHasPlaylistMode] = React.useState<boolean>(false);

  if (playingTrackId !== null) {
    const playingTrack = playlist.find(({ id }) => id === playingTrackId);
    if (!playingTrack) {
      throw new TypeError();
    }

    const handleSwitchToCurrentTrackMode = () => {
      setHasPlaylistMode(false);
    };

    const handleSwitchToPlaylistMode = () => {
      setHasPlaylistMode(true);
    };

    return (
      <PlayerControlsPanel>
        {hasPlaylistMode ? (
          <PlaylistControls
            onSwitchToCurrentTrackMode={handleSwitchToCurrentTrackMode}
          />
        ) : (
          <PlaybackControls
            onSwitchToPlaylistMode={handleSwitchToPlaylistMode}
            playingTrack={playingTrack}
          />
        )}
      </PlayerControlsPanel>
    );
  }

  return null;
};
