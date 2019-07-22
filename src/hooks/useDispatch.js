// @flow strict

import React from "react";

import { DispatchContext } from "contexts/DispatchContext";

export const useDispatch = () => {
  return React.useContext(DispatchContext);
};
