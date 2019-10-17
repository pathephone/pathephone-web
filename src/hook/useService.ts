import React from "react";

import { ServiceContext } from "context/ServiceContext";

export const useService = () => {
  return React.useContext(ServiceContext);
};
