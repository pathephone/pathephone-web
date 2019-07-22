// @flow strict

import { usePlayerContext } from "hooks/usePlayerContext";

export const useAudioPausedFlag = () => {
  const { audioStatus } = usePlayerContext();

  return audioStatus === "PAUSED";
};
