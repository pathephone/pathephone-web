// @flow strict

import * as React from 'react'

type TUseContextHook = <TContext> (context: React.Context<TContext>) => TContext

export const useContext: TUseContextHook = React.useContext