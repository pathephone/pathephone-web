import { TIntl } from "type/state";

import { UnexpectedError } from "util/error";

const availableIntlMap = new Map();

availableIntlMap.set("en", () => import("intl/en"));
availableIntlMap.set("ru", () => import("intl/ru"));

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
