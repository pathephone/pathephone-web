import { Collections } from "type/state/collections";
import { useAppState } from "hook/useAppState";

export const useCollections = (): Collections => {
  const { collections } = useAppState();

  return collections;
};
