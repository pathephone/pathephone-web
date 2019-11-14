import { List } from "type/util";

export const createList = <ItemType>(): List<ItemType> => ({
  itemsByPage: new Map<number, ItemType[]>(),
  wantedPages: [],
  ended: false
});
