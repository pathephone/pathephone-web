// @flow

import * as React from 'react';
import { HomelessContextConsumerError } from 'data/errors/LonelyConsumerError';

export function useContextStrict<TValue>(context: React.Context<TValue | null>): TValue {
  const contextValue = React.useContext(context);
  if (contextValue === null) {
    throw new HomelessContextConsumerError();
  }
  return contextValue
}