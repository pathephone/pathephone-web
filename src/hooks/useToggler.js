// @flow strict

import * as React from 'react'

export const useToggler = (initialValue: boolean = false) => {
  const [value, changeValue] = React.useState(initialValue);
  const toggleValue = () => {
    changeValue(!value)
  }
  return [value, toggleValue]
}