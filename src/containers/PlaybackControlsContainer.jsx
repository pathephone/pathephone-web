// @flow strict

import * as React from "react";

import { PlayerContext } from "contexts/PlayerContext";
import { useContextStrict } from "hooks/useContextStrict";
import { PlaybackControlsWrapper } from "components/PlaybackControls/PlaybackControlsConponents";
import { PlaylistControlsContainer } from "./PlaylistControlsContainer";
import { CurrentTrackControlsContainer } from "./CurrentTrackControlsContainer";

type TProps = {||};

export const PlaybackControlsContainer = (props: TProps) => {
  const { playlist, playingTrackId } = useContextStrict(PlayerContext);

  const [hasPlaylistMode, setHasPlaylistMode] = React.useState<boolean>(false)

  if (playingTrackId !== null) {
    const playingTrack = playlist.find(({ id }) => id === playingTrackId);
    if (!playingTrack) {
      throw new TypeError();
    }

    const handleSwitchToCurrentTrackMode = () => {
      setHasPlaylistMode(false)
    }

    const handleSwitchToPlaylistMode = () => {
      setHasPlaylistMode(true)
    }

    return (
      <PlaybackControlsWrapper>
        {
          hasPlaylistMode ? (
            <PlaylistControlsContainer onSwitchToCurrentTrackMode={handleSwitchToCurrentTrackMode} />
          ) : (
              <CurrentTrackControlsContainer
                onSwitchToPlaylistMode={handleSwitchToPlaylistMode}
                playingTrack={playingTrack}
              />
            )
        }
      </PlaybackControlsWrapper>
    );
  }

  return null;
};
