// @flow strict

import React from "react";

import { ServicesContext } from "contexts/ServicesContext";

export const useServices = () => {
  return React.useContext(ServicesContext);
};
