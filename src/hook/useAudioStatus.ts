import { usePlayerState } from "hook/usePlayerState";

export const useAudioStatus = () => {
  const { audioStatus } = usePlayerState();

  return audioStatus;
};
