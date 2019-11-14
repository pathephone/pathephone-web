import { usePlayerState } from "hook/usePlayerState";

export const useAudioPausedFlag = () => {
  const { audioStatus } = usePlayerState();

  return audioStatus === "PAUSED";
};
