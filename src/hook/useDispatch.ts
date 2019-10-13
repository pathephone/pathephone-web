import React from "react";

import { DispatchContext } from "context/DispatchContext";

export const useDispatch = () => {
  return React.useContext(DispatchContext);
};
