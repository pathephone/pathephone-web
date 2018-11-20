// @flow strict

import { useState } from 'hooks/useState';

export const useToggler = (initialValue: boolean = false): [ boolean, () => void ] => {
  const [value, changeValue] = useState(initialValue);
  const toggleValue = () => {
    changeValue(!value)
  }
  return [value, toggleValue]
}