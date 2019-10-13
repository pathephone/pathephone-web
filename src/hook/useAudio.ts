import * as React from "react";

import { usePlayingTrackURL } from "hook/usePlayingTrackURL";
import { useAudioPausedFlag } from "hook/useAudioPausedFlag";
import { useDispatch } from "./useDispatch";

export const useAudio = () => {
  const trackURL = usePlayingTrackURL();

  const dispatch = useDispatch();

  const paused = useAudioPausedFlag();

  // Create Audio object reference that will
  // be responsible for playing provided tracks
  const audioRef = React.useRef(new Audio());

  // Method that unloads current track from Audio object
  const stopAudio = React.useCallback(() => {
    const { current: audio } = audioRef;
    audio.removeAttribute("src");
    audio.load();
  }, []);

  // Effect tracks playing track url and
  // loads it into Audio object
  React.useEffect(() => {
    const { current: audio } = audioRef;

    if (trackURL) {
      if (audio.src !== trackURL) {
        audio.src = trackURL;

        if (!paused) {
          audio.play();
        }
      }
    } else {
      stopAudio();
    }
  }, [paused, stopAudio, trackURL]);

  // Effect cleans up Audio object before unmount
  React.useEffect(() => {
    return stopAudio;
  }, [stopAudio]);

  // Effect will pause / resume playback
  // in response to paused state change
  React.useEffect(() => {
    const { current: audio } = audioRef;

    if (paused && !audio.paused) {
      audio.pause();
    }

    if (!paused && audio.paused) {
      audio.play();
    }
  }, [paused]);

  // Effect attaches event listeners to Audio object
  React.useEffect(() => {
    const { current: audio } = audioRef;

    const waitingHandler = () => {
      dispatch({
        type: "AUDIO__WAITING"
      });
    };

    const pauseHandler = () => {
      dispatch({
        type: "AUDIO__PAUSED"
      });
    };

    const playingHandler = () => {
      dispatch({
        type: "AUDIO__PLAYING"
      });
    };

    const endedHandler = () => {
      dispatch({
        type: "AUDIO__ENDED"
      });
    };

    const errorHandler = (event: Event) => {
      dispatch({
        type: "AUDIO__FAILED",
        payload: audio.error || null
      });
    };

    audio.addEventListener("pause", pauseHandler);
    audio.addEventListener("waiting", waitingHandler);
    audio.addEventListener("playing", playingHandler);
    audio.addEventListener("ended", endedHandler);
    audio.addEventListener("error", errorHandler);

    return () => {
      audio.removeEventListener("pause", pauseHandler);
      audio.removeEventListener("waiting", waitingHandler);
      audio.removeEventListener("playing", playingHandler);
      audio.removeEventListener("ended", endedHandler);
      audio.removeEventListener("error", errorHandler);
    };
  }, [dispatch]);
};
