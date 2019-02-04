// @flow strict

import * as React from "react";

import { PlayerContext } from "contexts/PlayerContext";
import { useContextStrict } from "hooks/useContextStrict";
import { PlaybackControlsWrapper } from "components/PlaybackControls/PlaybackControlsWrapper";

type TProps = {||};

export const PlaybackControlsContainer = (props: TProps) => {
  const { playlist, playingTrackId } = useContextStrict(PlayerContext);

  if (playingTrackId !== null) {
    const playingTrack = playlist.find(({ id }) => id === playingTrackId);
    if (!playingTrack) {
      throw new TypeError();
    }
    return (
      <PlaybackControlsWrapper>
        <audio src={playingTrack.audioSrc} />
      </PlaybackControlsWrapper>
    );
  }

  return null;
};
