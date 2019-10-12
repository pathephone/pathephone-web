// @flow strict

import React from "react";

export const useCounter = (initialValue: number = 0) => {
  const [value, setValue] = React.useState(initialValue);

  const increment = React.useCallback(() => {
    setValue(prevValue => prevValue + 1);
  }, []);

  const reset = React.useCallback(() => {
    setValue(initialValue);
  }, [initialValue]);

  return { value, increment, reset };
};
