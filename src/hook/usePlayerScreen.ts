import { usePlayerContext } from "./usePlayerContext";

export const usePlayerScreen = () => {
  const { screen } = usePlayerContext();

  return screen;
};
