// @flow strict

import type { TLocaleStrings } from "data/localization/en.module"
import type { TApiContext } from 'contexts/ApiContext';

import * as React from 'react';

import { useState } from 'hooks/useState';
import { useContextStrict } from 'hooks/useContext';
import { usePromise } from 'hooks/usePromise';
import { useEffect } from 'hooks/useEffect';
import { ApiContext } from 'contexts/ApiContext';
import { LocalizationContext } from 'contexts/LocalizationContext';

type TProps = {|
  children: React.Node;
|}

export const Localization = ({ children }: TProps) => {

  const { getLocaleStrings, getBrowserLocale } = useContextStrict<TApiContext>(ApiContext);

  const [ localeName, setLocaleName ] = useState<string>(getBrowserLocale())
  const [ errorMessage, setErrorMessage ] = useState<string | null>(null)
  const [ localeStrings, setLocaleStrings ] = useState<TLocaleStrings | null>(null)

  useEffect(() => {
    setLocaleStrings(null)
    const nextLocalization = getLocaleStrings(localeName)
      .then(setLocaleStrings)
      .catch(e => setErrorMessage(e.message))
  }, [ localeName ]) 

  return (
    <LocalizationContext.Provider value={{ localeName, localeStrings, setLocaleStrings }}>
      {children}
    </LocalizationContext.Provider>
  )
}