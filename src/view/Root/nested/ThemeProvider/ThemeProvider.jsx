// @flow strict

import * as React from "react";

import { ThemeProviderWrapper } from "./styled/ThemeProviderWrapper";

type TProps = {
  children: React.Node
};

export const ThemeProvider = ({ children }: TProps) => {
  return <ThemeProviderWrapper>{children}</ThemeProviderWrapper>;
};
