import { useAppState } from "hook/useAppState";

export const useSearchAlbumsPageState = () => {
  const { searchAlbumsPageState } = useAppState();

  return searchAlbumsPageState;
};
