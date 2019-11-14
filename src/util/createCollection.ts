import { Collection } from "type/util";

export const createCollection = <ItemType>(): Collection<ItemType> => ({
  byId: new Map<string, ItemType>(),
  wantedIds: new Set<string>()
});
