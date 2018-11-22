// @flow strict

import * as React from 'react'

type TUseContextHook = <TContext> (context: React.Context<TContext>) => TContext;

export const useContext: TUseContextHook = React.useContext;

export function useContextStrict <TContext> (context: React.Context<TContext | null>): TContext {
  const value = useContext(context);
  if (value !== null) {
    return value
  }
  throw new Error();
}