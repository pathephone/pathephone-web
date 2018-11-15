// @flow strict

import * as React from 'react'

type SVGProps = {|
  className?: string
|}

export const ReactComponent = (props: SVGProps) => <svg { ...props }/>