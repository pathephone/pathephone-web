import { List } from "type/util";

export const getNextListPage = (list: List<any>) => {
  const { itemsByPage, wantedPages } = list;

  const readyPages = itemsByPage.keys();

  const allPages = [...readyPages, ...wantedPages];

  return Math.max(...allPages) + 1;
};
