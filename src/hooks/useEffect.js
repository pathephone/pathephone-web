// @flow

import * as React from 'react'

type TUseEffectHook = (effect: () => void, inputs?: any[]) => void 

export const useEffect: TUseEffectHook = React.useEffect 