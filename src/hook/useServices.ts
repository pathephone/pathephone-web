import React from "react";

import { ServicesContext } from "context/ServicesContext";

export const useServices = () => {
  return React.useContext(ServicesContext);
};
