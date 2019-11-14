import React from "react";

import { IntlDictionary } from "type/intl";
import { useViewState } from "hook/useViewState";
import { useCollections } from "hook/useCollections";
import { StrictHookError } from "util/error";

export const useIntlDictionary = (): IntlDictionary => {
  const { currentIntlCode } = useViewState();

  const { intlDictionaryCollection } = useCollections();

  const currentDictionary = React.useMemo(() => {
    if (currentIntlCode) {
      const dictionary = intlDictionaryCollection.byId.get(currentIntlCode);

      return dictionary || null;
    }

    return null;
  }, [currentIntlCode, intlDictionaryCollection.byId]);

  if (currentDictionary) {
    return currentDictionary;
  }

  throw new StrictHookError();
};
