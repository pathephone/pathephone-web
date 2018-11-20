// @flow

import * as React from 'react'

type TCallback = (...args: any[]) => void

type TUseCallbackHook = (
  callback: TCallback, inputs?: any[]
) => TCallback

export const useCallback: TUseCallbackHook = React.useCallback 