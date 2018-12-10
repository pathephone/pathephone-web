// @flow

import * as React from 'react';

export function useContextStrict<TValue>(context: React.Context<TValue | null>): TValue {
  const contextValue = React.useContext(context);
  if (contextValue === null) {
    throw new Error('Context has been used outside of the provider.')
  }
  return contextValue
}