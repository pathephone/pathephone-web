// @flow

import * as React from "react";

import { StrictHookError } from "data/errors";

export function useContextStrict<TValue>(
  context: React.Context<TValue | null>
): TValue {
  const contextValue = React.useContext(context);

  if (contextValue === null) {
    throw new StrictHookError();
  }

  return contextValue;
}
