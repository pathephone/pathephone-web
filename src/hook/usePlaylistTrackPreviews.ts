import { usePlayerState } from "hook/usePlayerState";
import { useTrackPreviews } from "hook/useTrackPreviews";

export const usePlaylistTrackPreviews = () => {
  const { playlistTrackIds } = usePlayerState();

  return useTrackPreviews(playlistTrackIds);
};
