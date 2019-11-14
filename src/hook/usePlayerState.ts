import { useAppState } from "hook/useAppState";

export const usePlayerState = () => {
  const { playerState } = useAppState();

  return playerState;
};
