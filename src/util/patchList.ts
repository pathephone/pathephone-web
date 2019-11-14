import { List } from "type/util";

export const patchList = <ItemType>(list: List<ItemType>) => {
  return {
    done(): List<ItemType> {
      return list;
    },
    addWantedPage(page: number) {
      return patchList({
        ...list,
        wantedPages: [...list.wantedPages, page]
      });
    },
    deleteWantedPage(page: number) {
      return patchList({
        ...list,
        wantedPages: list.wantedPages.filter(wantedPage => wantedPage !== page)
      });
    },
    clearWantedPages() {
      return patchList({
        ...list,
        wantedPages: []
      });
    },
    addPageItems(page: number, items: ItemType[]) {
      const nextItemsByPage = new Map<number, ItemType[]>(list.itemsByPage);

      nextItemsByPage.set(page, items);

      return patchList({
        ...list,
        itemsByPage: nextItemsByPage
      });
    },
    deletePageItems(page: number) {
      const nextItemsByPage = new Map<number, ItemType[]>(list.itemsByPage);

      nextItemsByPage.delete(page);

      return patchList({
        ...list,
        itemsByPage: nextItemsByPage
      });
    },
    clearItemsByPage() {
      return patchList({
        ...list,
        itemsByPage: new Map<number, ItemType[]>()
      });
    },
    setEnded(value: boolean) {
      return patchList({
        ...list,
        ended: value
      });
    }
  };
};
