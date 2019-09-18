// @flow strict

import type { TIntl } from "types/state";

import { UnexpectedError } from "data/errors";

const availableIntlMap = new Map();

const fallbackCode = "en";

availableIntlMap.set("en", () => import("./en"));

export const getIntlByCode = async (code: string): Promise<TIntl> => {
  const currentCode = availableIntlMap.has(code) ? code : fallbackCode;

  const dictionarySource = availableIntlMap.get(currentCode);

  const availableCodes = [...availableIntlMap.keys()];

  if (dictionarySource) {
    const { dictionary } = await dictionarySource();

    return {
      currentCode,
      availableCodes,
      dictionary
    };
  } else {
    throw new UnexpectedError();
  }
};
