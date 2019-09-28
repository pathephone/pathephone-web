// @flow strict

import type { TIntl } from "types/state";

import { UnexpectedError } from "data/errors";

const availableIntlMap = new Map();

availableIntlMap.set("en", () => import("./en"));
availableIntlMap.set("ru", () => import("./ru"));

const fallbackCode = "en";

export const getIntlByCodes = async (codes: string[]): Promise<TIntl> => {
  const firstAvailableCode = codes.find(code => availableIntlMap.has(code));

  const currentCode =
    firstAvailableCode !== undefined ? firstAvailableCode : fallbackCode;

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
