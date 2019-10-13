import { usePlayerContext } from "hook/usePlayerContext";

export const useAudioPausedFlag = () => {
  const { audioStatus } = usePlayerContext();

  return audioStatus === "PAUSED";
};
