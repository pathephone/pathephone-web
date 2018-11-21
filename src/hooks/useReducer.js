// @flow strict

import * as React from 'react'

type TReducer <TState, TAction> = (state: TState, action: TAction) => TState; 

type TUseReducerHook = <TState, TAction> (reducer: TReducer<TState, TAction>) => [ TState, (action: TAction) => TState ];

export const useReducer: TUseReducerHook = React.useReducer;