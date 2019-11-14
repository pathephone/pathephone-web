import * as React from "react";

import { useAudio } from "hook/useAudio";
import { usePlayingTrack } from "hook/usePlayingTrack";

export const useAudioService = () => {
  const { play, stop } = useAudio();

  const playingTrack = usePlayingTrack();

  // Effect tracks playing track url and
  // loads it into Audio object
  React.useEffect(() => {
    if (playingTrack) {
      play(playingTrack.audioSrc);
    } else {
      stop();
    }
  }, [play, playingTrack, stop]);

  // Effect cleans up Audio object before unmount
  React.useEffect(() => {
    return () => stop();
  }, [stop]);
};
