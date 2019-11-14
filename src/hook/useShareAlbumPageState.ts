import { useAppState } from "hook/useAppState";

export const useShareAlbumPageState = () => {
  const { shareAlbumPageState } = useAppState();

  return shareAlbumPageState;
};
