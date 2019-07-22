// @flow strict

import type { TFeedAlbum } from "types/state";

import { getUID } from "utils/uid";
import { getFeedAlbumMocks } from "utils/mock/getFeedAlbumMock";

type TRecord = {
  id: number,
  queryText: string,
  saved: boolean,
  results: TFeedAlbum[]
};

const getRecordInstance = (): TRecord => {
  const id = getUID();
  return {
    id,
    queryText: `cool ${id}`,
    saved: true,
    results: getFeedAlbumMocks(5)
  };
};

const getRecordInstances = (initialCount: number): TRecord[] => {
  let count = initialCount;

  const instances = [];

  while (count > 0) {
    instances.push(getRecordInstance());
    count -= 1;
  }

  return instances;
};

let store: TRecord[] = [...getRecordInstances(61)];

const getRecordByQuery = (queryText: string) => {
  let targetIndex = store.findIndex(record => record.queryText === queryText);
  if (targetIndex === -1) {
    targetIndex =
      store.push({
        id: getUID(),
        queryText,
        saved: false,
        results: []
      }) - 1;
  }
  return {
    patch(params: $Shape<TRecord>) {
      store = [...store];
      store[targetIndex] = {
        ...store[targetIndex],
        ...params
      };
    },
    getCopy() {
      return {
        ...store[targetIndex]
      };
    }
  };
};

export const queryModel = {
  // addQueryResult(queryText: string, result: TResult) {
  //   const targetIndex = store.findIndex(
  //     record => record.queryText === queryText
  //   );
  //   if (!targetIndex) {
  //     throw new Error();
  //   }
  //   const targetRecord = store[targetIndex];
  //   store = [...store];
  //   store[targetIndex] = {
  //     ...targetRecord,
  //     results: [result, ...targetRecord.results]
  //   };
  // },
  setSavedState(queryText: string, value: boolean) {
    const targetRecord = getRecordByQuery(queryText);
    targetRecord.patch({ saved: value });
  },
  getInfo(queryText: string) {
    return getRecordByQuery(queryText).getCopy();
  },
  getAll() {
    return [...store];
  }
};
