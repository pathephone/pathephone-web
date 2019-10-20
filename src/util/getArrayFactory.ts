export const getArrayFactory = <ItemType>(createItem: () => ItemType) => {
  return (initialCount: number) => {
    let count = initialCount;

    const items: ItemType[] = [];

    while (count > 0) {
      items.push(createItem());
      count -= 1;
    }

    return items;
  };
};
