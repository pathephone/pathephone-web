import { Collection } from "type/util";

export const patchCollection = <ItemType>(
  collection: Collection<ItemType>
) => ({
  done() {
    return collection;
  },
  addItem(id: string, item: ItemType) {
    const nextById = new Map(collection.byId);

    nextById.set(id, item);

    return patchCollection({
      ...collection,
      byId: nextById
    });
  },
  deleteItem(id: string) {
    const nextById = new Map(collection.byId);

    nextById.delete(id);

    return patchCollection({
      ...collection,
      byId: nextById
    });
  },
  addWantedId(id: string) {
    const nextWantedIds = new Set(collection.wantedIds);

    nextWantedIds.add(id);

    return patchCollection({
      ...collection,
      wantedIds: nextWantedIds
    });
  },
  deleteWantedId(id: string) {
    const nextWantedIds = new Set(collection.wantedIds);

    nextWantedIds.delete(id);

    return patchCollection({
      ...collection,
      wantedIds: nextWantedIds
    });
  }
});
