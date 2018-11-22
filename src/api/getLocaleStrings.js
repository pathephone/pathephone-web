// @flow strict

import type { TLocaleName } from "types/state"
import type { TLocaleStrings } from "data/localization/en.module"

export const getLocaleStrings = (localeName: string) => {
  switch(localeName) {
    case 'ru':
      return import('data/localization/ru.module')
        .then(module => module.ruLocaleStrings)
    default:
      throw new MissingLocaleError()
  }
}