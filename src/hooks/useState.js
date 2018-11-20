// @flow strict

import * as React from 'react'

type TUseStateHook = <TValue> (initial: TValue) => [ TValue, (nextValue: TValue) => void ]

export const useState: TUseStateHook = React.useState