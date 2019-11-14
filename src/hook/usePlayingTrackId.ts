import { usePlayerState } from "hook/usePlayerState";
import { StrictHookError } from "util/error";

export const usePlayingTrackId = (): null | string => {
  const { playingTrackId } = usePlayerState();

  return playingTrackId;
};

export const usePlayingTrackIdStrict = (): string => {
  const playingTrackId = usePlayingTrackId();

  if (!playingTrackId) {
    throw new StrictHookError();
  }

  return playingTrackId;
};
