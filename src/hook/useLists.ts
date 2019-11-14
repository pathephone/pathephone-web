import { useAppState } from "hook/useAppState";
import { Lists } from "type/state/lists";

export const useLists = (): Lists => {
  const { lists } = useAppState();

  return lists;
};
